import { useState } from "react";
import { StyledRegisterVideo } from "./styles";

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

export default function RegisterVideo() {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const formSubmit = useForm({
    initialValues: { title: "", url: "" }
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
