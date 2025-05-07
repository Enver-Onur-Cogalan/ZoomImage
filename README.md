# Pinch Zoom Gesture Demo (React Native)

This is a simple React Native demo project showcasing how to implement a **pinch-to-zoom** gesture on an image using `react-native-reanimated` and `react-native-gesture-handler`. The gesture allows the user to zoom in and out of the image by using a two-finger pinch gesture.

---

## 🛠 Technologies Used

- React Native CLI
- react-native-reanimated
- react-native-gesture-handler
- Android device testing (Samsung Galaxy A55)

---

## ✨ Features

- Smooth pinch-to-zoom interaction
- Scale value reacts dynamically to user's gesture
- Gesture resets when released (can be customized)
- Works seamlessly on real Android devices

---

## ⚙️ Setup & Run

1. Clone the repository:

```bash
git clone https://github.com/Enver-Onur-Cogalan/ZoomImage.git
cd Zoom
```

2. Install dependencies:

```bash
npm install
```

3. Run the app:

```bash
npx react-native run-android
```

> ⚠️ Make sure USB debugging is enabled on your Android device.

---

## 📱 Tested Device

This project has been tested and confirmed working on:

- **Samsung Galaxy A55** (via USB debugging with `adb`)

---

## 📌 Note

This is an experimental and educational project created as part of a gesture animation challenge.  
The goal is to learn and demonstrate gesture handling in React Native using Reanimated 3.

---

## 📄 License

MIT
