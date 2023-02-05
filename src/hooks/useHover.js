import { useAnimationState } from "moti";

const useHover = (pressOutColor, pressInColor) => {
  const animationState = useAnimationState({
    pressOut: {
      backgroundColor: pressOutColor,
    },
    pressIn: {
      backgroundColor: pressInColor,
    },
  });

  const handlePressIn = () => {
    animationState.transitionTo("pressIn");
  };

  const handlePressOut = () => {
    animationState.transitionTo("pressOut");
  };

  return {
    animationState,
    handlePressIn,
    handlePressOut,
  };
};

export default useHover;
