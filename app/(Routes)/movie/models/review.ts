export interface Review {
  author: string;
  author_details: Authordetails;
  content: string;
  created_at: string;
  id: string;
  updated_at: string;
  url: string;
}

interface Authordetails {
  name: string;
  username: string;
  avatar_path: string;
  rating?: any;
}