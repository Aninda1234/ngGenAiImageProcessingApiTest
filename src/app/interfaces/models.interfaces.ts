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

// interfaces/painting-response.interface.ts

export interface PaintingResponse {
    error_code: number;
    error_code_str: string;
    error_msg: string;
    request_id: string;
    log_id: string;
    image: string;
  }
  



// interfaces/deHaze-response.interface.ts

  export interface DeHazeResponse {
    error_code: number;
    error_code_str: string;
    error_msg: string;
    request_id: string;
    log_id: string;
    image: string;
  }


// interfaces/upscale-response.interface.ts

export interface UpscaleResponse {
    error_code: number;
    error_code_str: string;
    error_msg: string;
    request_id: string;
    log_id: string;
    data: {
        url: string;
    };
  }


// interfaces/colorize-photo.interface.ts

export interface ColorizeResponse {
    error_code: number;
    error_code_str: string;
    error_msg: string;
    request_id: string;
    log_id: string;
    image: string;
  }


// // interfaces/upscale-response.interface.ts

// export interface UpscaleResponse {
//     error_code: number;
//     error_code_str: string;
//     error_msg: string;
//     request_id: string;
//     log_id: string;
//     // error with data 
//     data: {
//         status: string
//         result_url: string;
//     };
//   }
