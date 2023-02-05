import { useState, startTransition } from "react";
import { useAuth } from "../../../context/AuthContext";

const useRegisterForm = () => {
  const [state, setState] = useState({
    email: "",
    password: "",
    fullname: "",
    pass4Digits: "",
    cpf: "",
  });
  const { register } = useAuth();
  const [currentStep, setCurrentStep] = useState(0);
  const [pass4Digits, setPass4Digits] = useState("");

  const isNotFullFormInputs = () =>
    !state.email && !state.password && !state.fullname && !state.cpf;

  const userRegisterData = {
    email: state.email,
    password: state.password,
    fullname: state.fullname,
    pass4Digits,
    cpf: state.cpf,
  };

  const handleChange = (value, name) => {
    if (!value && !name) return;
    setState((prev) => ({ ...prev, [name]: value }));
  };

  const handlePass4Digits = (value) => {
    if (value === "<") return setPass4Digits((prev) => prev.slice(0, -1));
    if (state.pass4Digits.length > 3) return;
    startTransition(() => {
      setPass4Digits((prev) => prev + value);
    });
  };

  const handleNextPage = () => {
    setCurrentStep((prev) => prev + 1);
  };

  const handleRegister = () => {
    try {
      if (pass4Digits.length < 4) return alert("Preencha os 4 digitos");
      register(userRegisterData);
    } catch (error) {
      console.log(error);
    }
  };

  return {
    pass4Digits,
    currentStep,
    handlePass4Digits,
    handleNextPage,
    isNotFullFormInputs,
    handleRegister,
    handleChange,
  };
};

export default useRegisterForm;
