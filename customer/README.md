Customer app (React Native — bare/native)

What exists:
- Native Android/ios folders (you can build with React Native CLI)
- `App.tsx` placeholder and `index.js` entry

How to run locally:
1. Install dependencies inside customer folder
   cd MobileApp/customer
   npm install
2. Start Metro bundler:
   npx react-native start
3. Build & run on Android emulator (from same folder):
   npx react-native run-android

Notes and preflight checks:
- Ensure you have Android SDK and environment configured for RN native builds.
- If you prefer to use Expo instead of bare native, I can convert this project to Expo-managed.
- If you face CLI missing errors, run:
   npm install --save-dev @react-native-community/cli
