import { useState } from "react";
import { StyledRegisterVideo } from "./styles";

export default function RegisterVideo() {
  const [isFormVisible, setIsFormVisible] = useState(false);

  return (
    <StyledRegisterVideo>
      <div>
        <button
          className="add-video"
          onClick={() => setIsFormVisible(true)}
        >+</button>
        {
          (isFormVisible) ?
            <form>
              <div>
                <button
                  type="button"
                  className="close-modal"
                  onClick={() => setIsFormVisible(false)}
                >X</button>
                <input placeholder="Título do vídeo" />
                <input placeholder="URL" />
                <button type="submit">Cadastrar</button>
              </div>
            </form>
          : null
        }
      </div>
    </StyledRegisterVideo>
  );
}
