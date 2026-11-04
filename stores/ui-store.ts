import { create } from "zustand";

/** 전역 UI 상태 타입 */
interface UiState {
  isSidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
  toggleSidebar: () => void;
}

/**
 * 전역 UI 상태 스토어 (zustand)
 * 사이드바 열림/닫힘 같은 클라이언트 상태를 예시로 담았습니다. 서버 데이터는 여기에 넣지 마세요.
 */
export const useUiStore = create<UiState>()((set) => ({
  isSidebarOpen: false,
  setSidebarOpen: (open) => set({ isSidebarOpen: open }),
  toggleSidebar: () => set((state) => ({ isSidebarOpen: !state.isSidebarOpen })),
}));
