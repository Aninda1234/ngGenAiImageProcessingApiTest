// interfaces/cartoon-response.interface.ts

export interface CartoonResponse {
    error_code: number;
    error_msg: string;
    request_id: string;
    log_id: string;
    data: {
      image_url: string;
    };
  }
  