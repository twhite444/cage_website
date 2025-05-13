# The Cage Website

This is the official website for The Cage, a student-run café at Bates College.

## Components

### StayConnected Component

The StayConnected component displays the most recent Instagram posts from the Cage's Instagram account (@batescagestuff). 

To set up the Instagram feed:

1. Sign up at [LightWidget](https://lightwidget.com/) (it's free)
2. Connect your Instagram account
3. Create a widget for 3 columns
4. Replace the widgetId in the StayConnected.jsx component with your own widget ID from LightWidget

```jsx
// Example usage
import StayConnected from './components/StayConnected';

function App() {
  return (
    <div>
      <StayConnected />
    </div>
  );
}
```

## Development

This project uses:
- React with Vite for fast development
- Tailwind CSS for styling
- Framer Motion for animations
