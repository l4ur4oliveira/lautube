import { createClient } from "@supabase/supabase-js";

const supabaseUrl  = "https://wrboteehgyqavoyfqjpq.supabase.co";
const supabaseKey = process.env.supabaseKey;
const supabase = createClient(supabaseUrl , supabaseKey);

export function videoService() {
  return {
    getAllVideos() {
      return supabase.from("video").select("*");
    },
    setVideo(values) {
      function getVideoId(url) {
        const videoId = url.split("v=")[1];
        const ampersandPosition = videoId.indexOf("&");
        if (ampersandPosition !== -1) {
          return videoId.substring(0, ampersandPosition);
        }
        return videoId;
      }
      const videoId = getVideoId(values.url);

      return supabase.from("video")
              .insert({
                title: values.title,
                url: values.url,
                thumb: `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`,
                playlist: values.playlist
              });
    }
  }
}
