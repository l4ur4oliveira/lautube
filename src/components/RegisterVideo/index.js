import { useState } from "react";
import { StyledRegisterVideo } from "./styles";

export default function RegisterVideo() {
  const [isFormVisible, setIsFormVisible] = useState(true);
  const [values, setValues] = useState({ title: "", url: ""});

  function temporarySubmit() {
    alert(`${values.title} - ${values.url}`);
  }

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
            <form onSubmit={(e) => e.preventDefault()}>
              <div>
                <button
                  type="button"
                  className="close-modal"
                  onClick={() => setIsFormVisible(false)}
                >X</button>
                <input
                  placeholder="Título do vídeo"
                  name="video-title"
                  value={values.title}
                  onChange={(e) => {
                    setValues({
                      ...values,
                      title: e.target.value
                    });
                  }}
                />
                <input
                  placeholder="URL"
                  name="video-url"
                  value={values.url}
                  onChange={(e) => {
                    setValues({
                      ...values,
                      url: e.target.value
                    });
                  }}
                />
                <button type="submit" onClick={temporarySubmit}>Cadastrar</button>
              </div>
            </form>
          )
          : null
        }
      </div>
    </StyledRegisterVideo>
  );
}
