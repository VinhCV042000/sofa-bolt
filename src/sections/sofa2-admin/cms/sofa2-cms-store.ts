import { useCallback, useSyncExternalStore } from 'react';

import { SOFA2_CMS_DEFAULTS } from './sofa2-cms-defaults';
import { cmsToday, type CmsPage, type CmsPost, type CmsMenu, type CmsMedia, type Sofa2CmsState } from './sofa2-cms-types';

// ----------------------------------------------------------------------
// Kho nội dung CMS sofa2 — lưu localStorage, dùng chung admin + trang khách
// ----------------------------------------------------------------------

const STORAGE_KEY = 'sofa2-cms-v1';

const clone = (value: Sofa2CmsState): Sofa2CmsState => JSON.parse(JSON.stringify(value));

function load(): Sofa2CmsState {
  if (typeof window === 'undefined') return clone(SOFA2_CMS_DEFAULTS);
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return clone(SOFA2_CMS_DEFAULTS);
    const parsed = JSON.parse(raw) as Partial<Sofa2CmsState>;
    return { ...clone(SOFA2_CMS_DEFAULTS), ...parsed };
  } catch {
    return clone(SOFA2_CMS_DEFAULTS);
  }
}

let state: Sofa2CmsState = load();

const listeners = new Set<() => void>();

function setState(next: Sofa2CmsState) {
  state = next;
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  } catch {
    /* bỏ qua khi trình duyệt chặn localStorage */
  }
  listeners.forEach((l) => l());
}

const subscribe = (listener: () => void) => {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
};

const getSnapshot = () => state;

export function useSofa2Cms() {
  const snapshot = useSyncExternalStore(subscribe, getSnapshot, getSnapshot);

  const savePage = useCallback((page: CmsPage) => {
    setState({
      ...state,
      pages: state.pages.map((p) => (p.key === page.key ? { ...page, updated: cmsToday() } : p)),
    });
  }, []);

  const addPage = useCallback((page: CmsPage) => {
    setState({ ...state, pages: [...state.pages, { ...page, updated: cmsToday() }] });
  }, []);

  const removePage = useCallback((key: string) => {
    setState({ ...state, pages: state.pages.filter((p) => p.key !== key) });
  }, []);

  const savePosts = useCallback((posts: CmsPost[]) => setState({ ...state, posts }), []);
  const saveMenus = useCallback((menus: CmsMenu[]) => setState({ ...state, menus }), []);
  const saveBanners = useCallback((banners: CmsMedia[]) => setState({ ...state, banners }), []);
  const saveSlides = useCallback((slides: CmsMedia[]) => setState({ ...state, slides }), []);

  const resetAll = useCallback(() => setState(clone(SOFA2_CMS_DEFAULTS)), []);

  return {
    cms: snapshot,
    savePage,
    addPage,
    removePage,
    savePosts,
    saveMenus,
    saveBanners,
    saveSlides,
    resetAll,
  };
}

export function useSofa2CmsPage(key: string) {
  const { cms } = useSofa2Cms();
  return cms.pages.find((p) => p.key === key);
}
