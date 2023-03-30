export interface YouTubeResponse {
  kind: string
  etag: string
  pageInfo: PageInfo
  items: Item[]
} // which will be best name for it?

interface PageInfo {
  totalResults: number
  resultsPerPage: number
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
  defaultAudioLanguage: string
  defaultLanguage?: string
}

interface Thumbnails {
  default: ThumbnailSize
  medium: ThumbnailSize
  high: ThumbnailSize
  standard: ThumbnailSize
  maxres: ThumbnailSize
}

interface ThumbnailSize {
  url: string;
  width: number;
  height: number;
}
interface Localized {
  title: string
  description: string
}

interface Statistics {
  viewCount: string
  likeCount: string
  dislikeCount: string
  favoriteCount: string
  commentCount: string
}
