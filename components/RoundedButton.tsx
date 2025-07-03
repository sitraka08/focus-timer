import { TouchableOpacity } from "react-native";
interface RoundedButtonProps {
  icon: React.ReactNode;
}

const RoundedButton = ({ icon }: RoundedButtonProps) => {
  return (
    <TouchableOpacity className="border border-white bg-[#fff4] w-20 h-20 rounded-full items-center justify-center">
      {icon}
    </TouchableOpacity>
  );
};

export default RoundedButton;
