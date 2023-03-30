export interface Card {
  id: number;
  imgURL: string;
  title: string;
  statistics: {
    viewCount: string;
    likeCount: string;
    dislikeCount: string;
    commentCount: string;
  }
}
