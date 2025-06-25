// types/cloudinary.d.ts
declare module "cloudinary" {
  import { EventEmitter } from "events";

  export const v2: {
    config: (options: {
      cloud_name: string;
      api_key: string;
      api_secret: string;
    }) => void;

    uploader: {
      upload_stream: (
        options: any,
        callback: (error: any, result: any) => void
      ) => EventEmitter;

      upload: (path: string, options?: any) => Promise<any>;
    };
  };
}
