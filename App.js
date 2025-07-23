import { View, Text, Pressable } from 'react-native';
import { styled } from 'nativewind';

// Styled components (optional)
const StyledView = styled(View);
const StyledText = styled(Text);
const StyledButton = styled(Pressable);

export default function App() {
  return (
    <StyledView className="flex-1 bg-gray-100 justify-center items-center p-4">
      <StyledText className="text-2xl font-bold text-blue-600 mb-4">
        Welcome to Tailwind React Native!
      </StyledText>

      <StyledButton
        className="bg-blue-500 px-4 py-2 rounded-lg shadow-md active:bg-blue-600"
        onPress={() => console.log('Pressed!')}
      >
        <StyledText className="text-white font-medium">
          Click Me
        </StyledText>
      </StyledButton>
    </StyledView>
  );
}