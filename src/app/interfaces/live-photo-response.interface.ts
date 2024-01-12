// live-photo-response.interface.ts

export interface LivePhotoResponse {
  error_code: number;
  error_msg: string;
  request_id: string;
  log_id: string;
  data: {
    video: string;
  };
}
