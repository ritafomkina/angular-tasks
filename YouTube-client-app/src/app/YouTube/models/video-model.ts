export interface VideoYouTubeResponse {
  kind: string
  etag: string
  items: Item[]
  pageInfo: PageInfo
}

interface Item {
  kind: string
  etag: string
  id: string
  snippet: Snippet
  statistics: Statistics
}

interface Snippet {
  publishedAt: string
  channelId: string
  title: string
  description: string
  thumbnails: Thumbnails
  channelTitle: string
  tags: string[]
  categoryId: string
  liveBroadcastContent: string
  localized: Localized
  defaultAudioLanguage?: string
}

interface Thumbnails {
  default: ThumbnailsSizes
  medium: ThumbnailsSizes
  high: ThumbnailsSizes
  standard?: ThumbnailsSizes
  maxres?: ThumbnailsSizes
}

interface ThumbnailsSizes {
  url: string
  width: number
  height: number
}

interface Localized {
  title: string
  description: string
}

interface Statistics {
  viewCount: string
  likeCount: string
  favoriteCount: string
  commentCount: string
}

interface PageInfo {
  totalResults: number
  resultsPerPage: number
}
