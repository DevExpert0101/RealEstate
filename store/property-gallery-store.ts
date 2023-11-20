import { create } from 'zustand'

interface GalleryState {
  image_urls: Array<String>
  setImageUrls: (urls: Array<String>) => void
}

const useGalleryStore = create<GalleryState>()((set) => ({
  image_urls: [],
  setImageUrls: (urls) => set((state) => ({ image_urls: urls})),
}))