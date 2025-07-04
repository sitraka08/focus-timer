import { TouchableOpacity } from "react-native";
interface RoundedButtonProps {
  icon: React.ReactNode;
  onPress?: () => void;
}

const RoundedButton = ({ icon, onPress }: RoundedButtonProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      className="border border-white bg-[#fff4] w-20 h-20 rounded-full items-center justify-center"
    >
      {icon}
    </TouchableOpacity>
  );
};

export default RoundedButton;
