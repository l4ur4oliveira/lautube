import { useState } from "react";
import { StyledRegisterVideo } from "./styles";
import { createClient } from "@supabase/supabase-js";

function useForm(formProps) {
  const [values, setValues] = useState(formProps.initialValues);
  
  return {
    values,
    handleChange: (e) => {
      const name = e.target.name;
      
      setValues({
        ...values,
        [name]: e.target.value
      });
    },
    clearForm: () => setValues({})
  }
}

const supabaseUrl  = "https://wrboteehgyqavoyfqjpq.supabase.co";
const supabaseKey = process.env.SUPABASE_KEY;
const supabase = createClient(supabaseUrl , supabaseKey);

function getVideoId(url) {
  const videoId = url.split("v=")[1];
  const ampersandPosition = videoId.indexOf("&");
  if (ampersandPosition !== -1) {
    return videoId.substring(0, ampersandPosition);
  }
  return videoId;
}

export default function RegisterVideo() {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const formSubmit = useForm({
    initialValues: { title: "", url: "", playlist: "" }
  });

  return (
    <StyledRegisterVideo>
      <div>
        <button
          className="add-video"
          onClick={() => setIsFormVisible(true)}
        >+</button>
        {
          isFormVisible
          ? (
            <form onSubmit={(e) => {
              e.preventDefault();

              const videoId = getVideoId(formSubmit.values.url);

              supabase.from("video").insert({
                title: formSubmit.values.title,
                url: formSubmit.values.url,
                thumb: `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`,
                playlist: formSubmit.values.playlist
              })
              .then((response) => {
                console.log(response);
              })
              .catch((err) => {
                console.log(err);
              });

              formSubmit.clearForm();
              setIsFormVisible(false);
            }}>
              <div>
                <button
                  type="button"
                  className="close-modal"
                  onClick={() => setIsFormVisible(false)}
                >X</button>
                <input
                  placeholder="Título da playlist"
                  name="playlist"
                  value={formSubmit.values.playlist}
                  onChange={formSubmit.handleChange}
                />
                <input
                  placeholder="Título do vídeo"
                  name="title"
                  value={formSubmit.values.title}
                  onChange={formSubmit.handleChange}
                />
                <input
                  placeholder="URL"
                  name="url"
                  value={formSubmit.values.url}
                  onChange={formSubmit.handleChange}
                />
                <button type="submit">Cadastrar</button>
              </div>
            </form>
          )
          : null
        }
      </div>
    </StyledRegisterVideo>
  );
}
