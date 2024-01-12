// interfaces/painting-response.interface.ts

export interface PaintingResponse {
    error_code: number;
    error_code_str: string;
    error_msg: string;
    request_id: string;
    log_id: string;
    image: string;
  }
  