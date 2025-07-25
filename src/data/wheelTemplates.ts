import { WheelTemplate } from '../types/wheel';

export interface CategorizedWheelTemplate extends WheelTemplate {
  category: string;
}

export const wheelTemplates: CategorizedWheelTemplate[] = [
  // Decision Wheels
  {
    id: 'what-to-do',
    name: 'What To Do Wheel',
    description: "Stuck on what to do? Spin the What To Do Wheel for instant inspiration and fun activities. Discover creative ideas and break boredom with a single spin!",
    category: 'Decision Wheels',
    segments: [
      { id: '1', text: 'Go for a walk', color: '#10B981', weight: 1 },
      { id: '2', text: 'Read a book', color: '#6366F1', weight: 1 },
      { id: '3', text: 'Watch a movie', color: '#F59E0B', weight: 1 },
      { id: '4', text: 'Call a friend', color: '#EF4444', weight: 1 },
      { id: '5', text: 'Cook something', color: '#8B5CF6', weight: 1 },
      { id: '6', text: 'Play a game', color: '#EC4899', weight: 1 }
    ]
  },
  {
    id: 'what-to-eat',
    name: 'What To Eat Wheel',
    description: "Can't decide what to eat? Spin the What To Eat Wheel for tasty meal ideas and restaurant picks. Perfect for families, friends, or solo foodies!",
    category: 'Decision Wheels',
    segments: [
      { id: '1', text: 'Pizza', color: '#EF4444', weight: 1 },
      { id: '2', text: 'Burger', color: '#F97316', weight: 1 },
      { id: '3', text: 'Sushi', color: '#EAB308', weight: 1 },
      { id: '4', text: 'Tacos', color: '#22C55E', weight: 1 },
      { id: '5', text: 'Pasta', color: '#3B82F6', weight: 1 },
      { id: '6', text: 'Salad', color: '#8B5CF6', weight: 1 }
    ]
  },
  {
    id: 'yes-no',
    name: 'Yes or No Wheel',
    description: "Need a quick answer? Spin the Yes No Wheel for instant decisions, settle debates, or add a fun twist to your choices. Try it now!",
    category: 'Decision Wheels',
    segments: [
      { id: '1', text: 'Yes', color: '#22C55E', weight: 1 },
      { id: '2', text: 'No', color: '#EF4444', weight: 1 }
    ]
  },
  {
    id: 'prize-wheel',
    name: 'Prize Wheel',
    description: "Make every event exciting! Spin the Prize Wheel for giveaways, parties, and promotions—create unforgettable moments and a chance to win.",
    category: 'Decision Wheels',
    segments: [
      { id: '1', text: 'Gift Card', color: '#F59E0B', weight: 1 },
      { id: '2', text: 'Free Lunch', color: '#10B981', weight: 1 },
      { id: '3', text: 'Extra Vacation Day', color: '#6366F1', weight: 1 },
      { id: '4', text: 'Movie Tickets', color: '#EF4444', weight: 1 },
      { id: '5', text: 'Coffee', color: '#8B5CF6', weight: 1 },
      { id: '6', text: 'Nothing', color: '#EC4899', weight: 1 }
    ]
  },
  {
    id: 'spin-the-wheel',
    name: 'Spin The Wheel',
    description: "Spin The Wheel is your ultimate decision-making tool! Add custom options for games, chores, or challenges and make every choice fun and interactive.",
    category: 'Decision Wheels',
    segments: [
      { id: '1', text: 'Option 1', color: '#EF4444', weight: 1 },
      { id: '2', text: 'Option 2', color: '#F97316', weight: 1 },
      { id: '3', text: 'Option 3', color: '#EAB308', weight: 1 },
      { id: '4', text: 'Option 4', color: '#22C55E', weight: 1 },
      { id: '5', text: 'Option 5', color: '#3B82F6', weight: 1 },
      { id: '6', text: 'Option 6', color: '#8B5CF6', weight: 1 }
    ]
  },
  // Name & Team Wheels
  {
    id: 'wheel-of-names',
    name: 'Wheel of Names',
    description: "Pick names fairly and easily! Use the Wheel of Names for classrooms, raffles, teams, or parties. Enter your list and spin to select a winner or participant.",
    category: 'Name & Team Wheels',
    segments: [
      { id: '1', text: 'Alice', color: '#EF4444', weight: 1 },
      { id: '2', text: 'Bob', color: '#F97316', weight: 1 },
      { id: '3', text: 'Charlie', color: '#EAB308', weight: 1 },
      { id: '4', text: 'Diana', color: '#22C55E', weight: 1 },
      { id: '5', text: 'Eve', color: '#3B82F6', weight: 1 },
      { id: '6', text: 'Frank', color: '#8B5CF6', weight: 1 }
    ]
  },
  {
    id: 'random-team-generator',
    name: 'Random Team Generator',
    description: "Create balanced teams instantly! The Random Team Generator Wheel is perfect for sports, projects, or classrooms. Enter names and spin for fair, random teams.",
    category: 'Name & Team Wheels',
    segments: [
      { id: '1', text: 'Team 1', color: '#EF4444', weight: 1 },
      { id: '2', text: 'Team 2', color: '#3B82F6', weight: 1 },
      { id: '3', text: 'Team 3', color: '#10B981', weight: 1 },
      { id: '4', text: 'Team 4', color: '#F59E0B', weight: 1 }
    ]
  },
  // Color & Number Wheels
  {
    id: 'color-picker',
    name: 'Color Picker Wheel',
    description: "Need color inspiration? Spin the Color Picker Wheel to discover new palettes and shades for art, design, decor, fashion, and creative projects.",
    category: 'Color & Number Wheels',
    segments: [
      { id: '1', text: 'Red', color: '#EF4444', weight: 1 },
      { id: '2', text: 'Blue', color: '#3B82F6', weight: 1 },
      { id: '3', text: 'Green', color: '#22C55E', weight: 1 },
      { id: '4', text: 'Yellow', color: '#EAB308', weight: 1 },
      { id: '5', text: 'Purple', color: '#8B5CF6', weight: 1 },
      { id: '6', text: 'Orange', color: '#F97316', weight: 1 },
      { id: '7', text: 'Pink', color: '#EC4899', weight: 1 },
      { id: '8', text: 'Teal', color: '#14B8A6', weight: 1 }
    ]
  },
  {
    id: 'lucky-numbers',
    name: 'Lucky Numbers Wheel',
    description: "Feeling lucky? Spin the Lucky Numbers Wheel for random numbers in games, raffles, lotteries, or daily inspiration. Perfect for classrooms and fun!",
    category: 'Color & Number Wheels',
    segments: [
      { id: '1', text: '1', color: '#EF4444', weight: 1 },
      { id: '2', text: '2', color: '#F97316', weight: 1 },
      { id: '3', text: '3', color: '#EAB308', weight: 1 },
      { id: '4', text: '4', color: '#22C55E', weight: 1 },
      { id: '5', text: '5', color: '#14B8A6', weight: 1 },
      { id: '6', text: '6', color: '#3B82F6', weight: 1 },
      { id: '7', text: '7', color: '#6366F1', weight: 1 },
      { id: '8', text: '8', color: '#8B5CF6', weight: 1 },
      { id: '9', text: '9', color: '#EC4899', weight: 1 },
      { id: '10', text: '10', color: '#6B7280', weight: 1 }
    ]
  },
  // Food & Meal Wheels
  {
    id: 'wheel-of-lunch',
    name: 'Wheel of Lunch',
    description: "Can't decide on lunch? Spin the Wheel of Lunch for tasty meal ideas and break your routine. Great for offices, families, or anyone wanting a fun lunch pick!",
    category: 'Food Wheels',
    segments: [
      { id: '1', text: 'Sandwich', color: '#F59E0B', weight: 1 },
      { id: '2', text: 'Salad', color: '#10B981', weight: 1 },
      { id: '3', text: 'Pizza', color: '#EF4444', weight: 1 },
      { id: '4', text: 'Burger', color: '#F97316', weight: 1 },
      { id: '5', text: 'Sushi', color: '#EAB308', weight: 1 },
      { id: '6', text: 'Pasta', color: '#3B82F6', weight: 1 }
    ]
  },
  {
    id: 'fast-food-wheel',
    name: 'Fast Food Wheel',
    description: "Craving fast food? Spin the Fast Food Wheel for popular restaurant and menu ideas. Perfect for group decisions, parties, road trips, or snack runs!",
    category: 'Food Wheels',
    segments: [
      { id: '1', text: 'McDonalds', color: '#F59E0B', weight: 1 },
      { id: '2', text: 'KFC', color: '#EF4444', weight: 1 },
      { id: '3', text: 'Burger King', color: '#F97316', weight: 1 },
      { id: '4', text: 'Subway', color: '#10B981', weight: 1 },
      { id: '5', text: 'Dominos', color: '#3B82F6', weight: 1 },
      { id: '6', text: 'Pizza Hut', color: '#8B5CF6', weight: 1 }
    ]
  },
  // Game & Fun Wheels
  {
    id: 'truth-or-dare',
    name: 'Truth Or Dare Wheel',
    description: "Ready for a challenge? Spin the Truth or Dare Wheel for bold, silly, and fun prompts. Break the ice and make every party or hangout unforgettable!",
    category: 'Game & Fun Wheels',
    segments: [
      { id: '1', text: 'Truth', color: '#6366F1', weight: 1 },
      { id: '2', text: 'Dare', color: '#EF4444', weight: 1 }
    ]
  },
  {
    id: 'heads-or-tails',
    name: 'Heads or Tails Wheel',
    description: "Flip a virtual coin with the Heads or Tails Wheel! Perfect for quick decisions, games, or settling bets. Enjoy fair, suspenseful results—no coin needed!",
    category: 'Game & Fun Wheels',
    segments: [
      { id: '1', text: 'Heads', color: '#F59E0B', weight: 1 },
      { id: '2', text: 'Tails', color: '#6366F1', weight: 1 }
    ]
  },
  // Add more wheels as needed...
  // Tools Category
  {
    id: 'random-password-generator',
    name: 'Random Password Generator',
    description: "Stay secure! Spin the Random Password Generator Wheel to instantly create strong, unique passwords for your accounts. Perfect for online safety and privacy.",
    category: 'Tools',
    segments: [
      { id: '1', text: 'Uppercase', color: '#EF4444', weight: 1 },
      { id: '2', text: 'Lowercase', color: '#F97316', weight: 1 },
      { id: '3', text: 'Numbers', color: '#EAB308', weight: 1 },
      { id: '4', text: 'Symbols', color: '#22C55E', weight: 1 },
      { id: '5', text: 'Mixed', color: '#3B82F6', weight: 1 }
    ]
  },
  {
    id: 'random-letter-picker',
    name: 'Random Letter Picker',
    description: "Need a random letter? Spin the Random Letter Picker Wheel for games, learning, or creative prompts. Great for classrooms, word games, and fun activities!",
    category: 'Tools',
    segments: [
      { id: '1', text: 'A', color: '#EF4444', weight: 1 },
      { id: '2', text: 'B', color: '#F97316', weight: 1 },
      { id: '3', text: 'C', color: '#EAB308', weight: 1 },
      { id: '4', text: 'D', color: '#22C55E', weight: 1 },
      { id: '5', text: 'E', color: '#14B8A6', weight: 1 },
      { id: '6', text: 'F', color: '#3B82F6', weight: 1 },
      { id: '7', text: 'G', color: '#6366F1', weight: 1 },
      { id: '8', text: 'H', color: '#8B5CF6', weight: 1 },
      { id: '9', text: 'I', color: '#EC4899', weight: 1 },
      { id: '10', text: 'J', color: '#F59E0B', weight: 1 },
      { id: '11', text: 'K', color: '#10B981', weight: 1 },
      { id: '12', text: 'L', color: '#6B7280', weight: 1 },
      { id: '13', text: 'M', color: '#EF4444', weight: 1 },
      { id: '14', text: 'N', color: '#F97316', weight: 1 },
      { id: '15', text: 'O', color: '#EAB308', weight: 1 },
      { id: '16', text: 'P', color: '#22C55E', weight: 1 },
      { id: '17', text: 'Q', color: '#14B8A6', weight: 1 },
      { id: '18', text: 'R', color: '#3B82F6', weight: 1 },
      { id: '19', text: 'S', color: '#6366F1', weight: 1 },
      { id: '20', text: 'T', color: '#8B5CF6', weight: 1 },
      { id: '21', text: 'U', color: '#EC4899', weight: 1 },
      { id: '22', text: 'V', color: '#F59E0B', weight: 1 },
      { id: '23', text: 'W', color: '#10B981', weight: 1 },
      { id: '24', text: 'X', color: '#6B7280', weight: 1 },
      { id: '25', text: 'Y', color: '#EF4444', weight: 1 },
      { id: '26', text: 'Z', color: '#F97316', weight: 1 }
    ]
  },
  {
    id: 'dice-roller',
    name: 'Dice Roller Wheel',
    description: "No dice? No problem! Spin the Dice Roller Wheel for a virtual roll in board games, classroom activities, or anytime you need a quick random number.",
    category: 'Tools',
    segments: [
      { id: '1', text: '⚀', color: '#EF4444', weight: 1 },
      { id: '2', text: '⚁', color: '#F97316', weight: 1 },
      { id: '3', text: '⚂', color: '#EAB308', weight: 1 },
      { id: '4', text: '⚃', color: '#22C55E', weight: 1 },
      { id: '5', text: '⚄', color: '#3B82F6', weight: 1 },
      { id: '6', text: '⚅', color: '#8B5CF6', weight: 1 }
    ]
  },
  {
    id: 'coin-flip',
    name: 'Coin Flip Wheel',
    description: "Need to make a quick decision? Spin the Coin Flip Wheel for a digital heads or tails result. Perfect for games, choices, or a little extra luck!",
    category: 'Tools',
    segments: [
      { id: '1', text: 'Heads', color: '#F59E0B', weight: 1, emoji: '🪙' },
      { id: '2', text: 'Tails', color: '#6366F1', weight: 1, emoji: '🪙' }
    ]
  },
  {
    id: 'random-direction',
    name: 'Random Direction Wheel',
    description: "Feeling adventurous? Spin the Random Direction Wheel to pick north, south, east, or west. Great for travel, games, or spontaneous exploration!",
    category: 'Tools',
    segments: [
      { id: '1', text: 'North', color: '#EF4444', weight: 1, emoji: '⬆️' },
      { id: '2', text: 'South', color: '#22C55E', weight: 1, emoji: '⬇️' },
      { id: '3', text: 'East', color: '#3B82F6', weight: 1, emoji: '➡️' },
      { id: '4', text: 'West', color: '#8B5CF6', weight: 1, emoji: '⬅️' },
      { id: '5', text: 'Northeast', color: '#F97316', weight: 1, emoji: '↗️' },
      { id: '6', text: 'Northwest', color: '#EC4899', weight: 1, emoji: '↖️' },
      { id: '7', text: 'Southeast', color: '#14B8A6', weight: 1, emoji: '↘️' },
      { id: '8', text: 'Southwest', color: '#F59E0B', weight: 1, emoji: '↙️' }
    ]
  },
  // Wheel of Fortune (Magic 8-Ball style)
  {
    id: 'the-wheel-of-fortune',
    name: 'The Wheel of Fortune',
    description: "Test your luck! Spin the Wheel of Fortune for excitement, suspense, and prizes. Add a classic game show twist to your next party or gathering.",
    category: 'Game & Fun Wheels',
    segments: [
      { id: '1', text: 'It is certain', color: '#2bab5e', weight: 1 },
      { id: '2', text: 'Reply hazy, try again', color: '#f8fff5', weight: 1 },
      { id: '3', text: 'As I see it, yes', color: '#f2c054', weight: 1 },
      { id: '4', text: "Don't count on it", color: '#fffcf5', weight: 1 },
      { id: '5', text: 'It is decidedly so', color: '#5c85c7', weight: 1 },
      { id: '6', text: 'Ask again later', color: '#f5fffe', weight: 1 },
      { id: '7', text: 'Most likely', color: '#db4d4d', weight: 1 },
      { id: '8', text: 'My reply is no', color: '#fff7f5', weight: 1 },
      { id: '9', text: 'Without a doubt', color: '#2bab5e', weight: 1 },
      { id: '10', text: 'Better not tell you now', color: '#f8fff5', weight: 1 },
      { id: '11', text: 'Outlook good', color: '#f2c054', weight: 1 },
      { id: '12', text: 'My sources say no', color: '#fffcf5', weight: 1 },
      { id: '13', text: 'Yes - definitely', color: '#5c85c7', weight: 1 },
      { id: '14', text: 'Cannot predict now', color: '#f5fffe', weight: 1 },
      { id: '15', text: 'Probably, yes', color: '#db4d4d', weight: 1 },
      { id: '16', text: 'Outlook not so good', color: '#fff7f5', weight: 1 },
      { id: '17', text: 'You may rely on it', color: '#2bab5e', weight: 1 },
      { id: '18', text: 'Concentrate & ask again', color: '#f8fff5', weight: 1 },
      { id: '19', text: 'Signs point to yes', color: '#f2c054', weight: 1 },
      { id: '20', text: 'Very doubtful', color: '#fffcf5', weight: 1 }
    ]
  },
  // Magic 8-Ball (slightly different answers)
  {
    id: 'magic-8-ball',
    name: 'Magic 8-Ball',
    description: "Ask a question and spin the Magic 8-Ball Wheel for playful predictions and advice. Perfect for parties, classrooms, or anyone who loves a little magic!",
    category: 'Decision Wheels',
    segments: [
      { id: '1', text: 'Yes', color: '#4f46e5', weight: 1 },
      { id: '2', text: 'No', color: '#f59e0b', weight: 1 },
      { id: '3', text: 'Maybe', color: '#10b981', weight: 1 },
      { id: '4', text: 'Ask again later', color: '#6366f1', weight: 1 },
      { id: '5', text: 'Definitely', color: '#ef4444', weight: 1 },
      { id: '6', text: 'Unlikely', color: '#8b5cf6', weight: 1 },
      { id: '7', text: 'Cannot predict now', color: '#f5fffe', weight: 1 },
      { id: '8', text: 'Most likely', color: '#db4d4d', weight: 1 }
    ]
  },
  // Twister Wheel
  {
    id: 'twister-wheel',
    name: 'Twister Wheel',
    description: "Add a twist to game night! Spin the Twister Wheel for new moves and challenges. Keep everyone on their toes and make your next Twister session extra fun!",
    category: 'Game & Fun Wheels',
    segments: [
      { id: '1', text: 'Left Hand Red', color: '#ef4444', weight: 1 },
      { id: '2', text: 'Left Hand Blue', color: '#3b82f6', weight: 1 },
      { id: '3', text: 'Left Hand Green', color: '#10b981', weight: 1 },
      { id: '4', text: 'Left Hand Yellow', color: '#f59e0b', weight: 1 },
      { id: '5', text: 'Right Hand Red', color: '#ef4444', weight: 1 },
      { id: '6', text: 'Right Hand Blue', color: '#3b82f6', weight: 1 },
      { id: '7', text: 'Right Hand Green', color: '#10b981', weight: 1 },
      { id: '8', text: 'Right Hand Yellow', color: '#f59e0b', weight: 1 },
      { id: '9', text: 'Left Foot Red', color: '#ef4444', weight: 1 },
      { id: '10', text: 'Left Foot Blue', color: '#3b82f6', weight: 1 },
      { id: '11', text: 'Left Foot Green', color: '#10b981', weight: 1 },
      { id: '12', text: 'Left Foot Yellow', color: '#f59e0b', weight: 1 },
      { id: '13', text: 'Right Foot Red', color: '#ef4444', weight: 1 },
      { id: '14', text: 'Right Foot Blue', color: '#3b82f6', weight: 1 },
      { id: '15', text: 'Right Foot Green', color: '#10b981', weight: 1 },
      { id: '16', text: 'Right Foot Yellow', color: '#f59e0b', weight: 1 }
    ]
  },
  // Random Number Picker (1-100)
  {
    id: 'random-number-picker',
    name: 'Random Number Picker',
    description: "Need a random number? Spin the Random Number Picker for games, raffles, or quick decisions. Pick from 1-100 with every spin!",
    category: 'Color & Number Wheels',
    segments: (() => {
      const segments = [];
      for (let i = 1; i <= 100; i++) {
        segments.push({ id: `${i}`, text: `${i}`, color: i % 2 === 0 ? '#6366f1' : '#f59e0b', weight: 1 });
      }
      return segments;
    })()
  },
  // Wheel of Birthdays (12 months)
  {
    id: 'wheel-of-birthdays',
    name: 'Wheel Of Birthdays',
    description: "Celebrate in style! Spin the Wheel of Birthdays for party games, gift ideas, or fun birthday activities. Make every birthday unique and memorable!",
    category: 'Custom Wheels',
    segments: [
      { id: '1', text: 'January', color: '#3b82f6', weight: 1 },
      { id: '2', text: 'February', color: '#f59e0b', weight: 1 },
      { id: '3', text: 'March', color: '#10b981', weight: 1 },
      { id: '4', text: 'April', color: '#8b5cf6', weight: 1 },
      { id: '5', text: 'May', color: '#ef4444', weight: 1 },
      { id: '6', text: 'June', color: '#f97316', weight: 1 },
      { id: '7', text: 'July', color: '#6366f1', weight: 1 },
      { id: '8', text: 'August', color: '#22c55e', weight: 1 },
      { id: '9', text: 'September', color: '#eab308', weight: 1 },
      { id: '10', text: 'October', color: '#3b82f6', weight: 1 },
      { id: '11', text: 'November', color: '#f59e0b', weight: 1 },
      { id: '12', text: 'December', color: '#10b981', weight: 1 }
    ]
  },
  // Squid Game Roles
  {
    id: 'squid-game-roles',
    name: 'Squid Game Roles',
    description: "Get your Squid Game role! Spin to become a player, guard, or VIP. Perfect for themed parties, cosplay events, and fans of the hit show!",
    category: 'Game & Fun Wheels',
    segments: [
      { id: '1', text: 'Player', color: '#ef4444', weight: 1 },
      { id: '2', text: 'Guard', color: '#6366f1', weight: 1 },
      { id: '3', text: 'Front Man', color: '#10b981', weight: 1 },
      { id: '4', text: 'VIP', color: '#f59e0b', weight: 1 },
      { id: '5', text: 'Detective', color: '#3b82f6', weight: 1 }
    ]
  },
  // --- Community Wheels (Bulk Added) ---
  // Remove the entire block that bulk-adds community wheels with placeholder data (the array/map over the 500+ slugs). Only keep the original, manually crafted templates.
  // Letter Picker Wheel (A-Z)
  {
    id: 'letter-picker-wheel',
    name: 'Letter Picker Wheel',
    description: "Pick a random letter with the Letter Picker Wheel! Perfect for word games, classroom activities, or creative writing. Spin to inspire learning and fun challenges.",
    category: 'Color & Number Wheels',
    segments: [
      { id: '1', text: 'A', color: '#EF4444', weight: 1 },
      { id: '2', text: 'B', color: '#F97316', weight: 1 },
      { id: '3', text: 'C', color: '#EAB308', weight: 1 },
      { id: '4', text: 'D', color: '#22C55E', weight: 1 },
      { id: '5', text: 'E', color: '#14B8A6', weight: 1 },
      { id: '6', text: 'F', color: '#3B82F6', weight: 1 },
      { id: '7', text: 'G', color: '#6366F1', weight: 1 },
      { id: '8', text: 'H', color: '#8B5CF6', weight: 1 },
      { id: '9', text: 'I', color: '#EC4899', weight: 1 },
      { id: '10', text: 'J', color: '#F59E0B', weight: 1 },
      { id: '11', text: 'K', color: '#10B981', weight: 1 },
      { id: '12', text: 'L', color: '#6B7280', weight: 1 },
      { id: '13', text: 'M', color: '#EF4444', weight: 1 },
      { id: '14', text: 'N', color: '#F97316', weight: 1 },
      { id: '15', text: 'O', color: '#EAB308', weight: 1 },
      { id: '16', text: 'P', color: '#22C55E', weight: 1 },
      { id: '17', text: 'Q', color: '#14B8A6', weight: 1 },
      { id: '18', text: 'R', color: '#3B82F6', weight: 1 },
      { id: '19', text: 'S', color: '#6366F1', weight: 1 },
      { id: '20', text: 'T', color: '#8B5CF6', weight: 1 },
      { id: '21', text: 'U', color: '#EC4899', weight: 1 },
      { id: '22', text: 'V', color: '#F59E0B', weight: 1 },
      { id: '23', text: 'W', color: '#10B981', weight: 1 },
      { id: '24', text: 'X', color: '#6B7280', weight: 1 },
      { id: '25', text: 'Y', color: '#EF4444', weight: 1 },
      { id: '26', text: 'Z', color: '#F97316', weight: 1 }
    ]
  },
  // Country Picker Wheel (all countries, sample)
  {
    id: 'country-picker-wheel',
    name: 'Country Picker Wheel',
    description: "Travel the world from home! Spin the Country Picker Wheel to discover countries for games, learning, or trip planning. Get inspired for your next adventure!",
    category: 'Geography Wheels',
    segments: [
      { id: '1', text: 'United States', color: '#3b82f6', weight: 1 },
      { id: '2', text: 'Canada', color: '#f59e0b', weight: 1 },
      { id: '3', text: 'United Kingdom', color: '#10b981', weight: 1 },
      { id: '4', text: 'Australia', color: '#8b5cf6', weight: 1 },
      { id: '5', text: 'India', color: '#ef4444', weight: 1 },
      { id: '6', text: 'Germany', color: '#f97316', weight: 1 },
      { id: '7', text: 'France', color: '#6366f1', weight: 1 },
      { id: '8', text: 'Japan', color: '#22c55e', weight: 1 },
      { id: '9', text: 'Brazil', color: '#eab308', weight: 1 },
      { id: '10', text: 'South Africa', color: '#3b82f6', weight: 1 }
      // ... (add more countries as needed)
    ]
  },
  // State Picker Wheel (US states, sample)
  {
    id: 'state-picker-wheel',
    name: 'State Picker Wheel',
    description: "Which state will you get? Spin the State Picker Wheel for geography games, travel planning, or classroom fun. Learn about U.S. states and inspire your next trip!",
    category: 'Geography Wheels',
    segments: [
      { id: '1', text: 'California', color: '#3b82f6', weight: 1 },
      { id: '2', text: 'Texas', color: '#f59e0b', weight: 1 },
      { id: '3', text: 'Florida', color: '#10b981', weight: 1 },
      { id: '4', text: 'New York', color: '#8b5cf6', weight: 1 },
      { id: '5', text: 'Illinois', color: '#ef4444', weight: 1 },
      { id: '6', text: 'Pennsylvania', color: '#f97316', weight: 1 },
      { id: '7', text: 'Ohio', color: '#6366f1', weight: 1 },
      { id: '8', text: 'Georgia', color: '#22c55e', weight: 1 },
      { id: '9', text: 'North Carolina', color: '#eab308', weight: 1 },
      { id: '10', text: 'Michigan', color: '#3b82f6', weight: 1 }
      // ... (add more states as needed)
    ]
  },
  // Date Picker Wheel (Jan 1 - Dec 31, sample)
  {
    id: 'date-picker-wheel',
    name: 'Date Picker Wheel',
    description: "Spin to pick a random date! The Date Picker Wheel is great for planning events, games, or learning about history. Inspire new activities or celebrate special occasions.",
    category: 'Game & Fun Wheels',
    segments: [
      { id: '1', text: 'January 1', color: '#3b82f6', weight: 1 },
      { id: '2', text: 'February 14', color: '#f59e0b', weight: 1 },
      { id: '3', text: 'March 17', color: '#10b981', weight: 1 },
      { id: '4', text: 'April 1', color: '#8b5cf6', weight: 1 },
      { id: '5', text: 'July 4', color: '#ef4444', weight: 1 },
      { id: '6', text: 'October 31', color: '#f97316', weight: 1 },
      { id: '7', text: 'December 25', color: '#6366f1', weight: 1 }
      // ... (add more dates as needed)
    ]
  },
  // MLB Picker Wheel (sample)
  {
    id: 'mlb-picker-wheel',
    name: 'MLB Picker Wheel',
    description: "Spin to pick a random MLB team! Great for fantasy drafts, competitions, or learning about baseball. Make unbiased choices for your next event or trivia game.",
    category: 'Sports Wheels',
    segments: [
      { id: '1', text: 'New York Yankees', color: '#3b82f6', weight: 1 },
      { id: '2', text: 'Los Angeles Dodgers', color: '#f59e0b', weight: 1 },
      { id: '3', text: 'Chicago Cubs', color: '#10b981', weight: 1 },
      { id: '4', text: 'Boston Red Sox', color: '#8b5cf6', weight: 1 },
      { id: '5', text: 'San Francisco Giants', color: '#ef4444', weight: 1 },
      { id: '6', text: 'Houston Astros', color: '#f97316', weight: 1 }
      // ... (add more teams as needed)
    ]
  },
  // NBA Picker Wheel (sample)
  {
    id: 'nba-picker-wheel',
    name: 'NBA Picker Wheel',
    description: "Spin to pick a random NBA team! Perfect for basketball fans, fantasy leagues, or games. Use this wheel for challenges or to learn about NBA franchises.",
    category: 'Sports Wheels',
    segments: [
      { id: '1', text: 'Los Angeles Lakers', color: '#f59e0b', weight: 1 },
      { id: '2', text: 'Golden State Warriors', color: '#3b82f6', weight: 1 },
      { id: '3', text: 'Chicago Bulls', color: '#ef4444', weight: 1 },
      { id: '4', text: 'Boston Celtics', color: '#10b981', weight: 1 },
      { id: '5', text: 'Miami Heat', color: '#8b5cf6', weight: 1 },
      { id: '6', text: 'Brooklyn Nets', color: '#f97316', weight: 1 }
      // ... (add more teams as needed)
    ]
  },
  // NFL Picker Wheel (sample)
  {
    id: 'nfl-picker-wheel',
    name: 'NFL Picker Wheel',
    description: "Spin to pick a random NFL team! Great for football pools, fantasy drafts, or fun. Discover new teams and add excitement to your next game or party.",
    category: 'Sports Wheels',
    segments: [
      { id: '1', text: 'New England Patriots', color: '#3b82f6', weight: 1 },
      { id: '2', text: 'Dallas Cowboys', color: '#f59e0b', weight: 1 },
      { id: '3', text: 'Green Bay Packers', color: '#10b981', weight: 1 },
      { id: '4', text: 'San Francisco 49ers', color: '#8b5cf6', weight: 1 },
      { id: '5', text: 'Pittsburgh Steelers', color: '#ef4444', weight: 1 },
      { id: '6', text: 'Kansas City Chiefs', color: '#f97316', weight: 1 }
      // ... (add more teams as needed)
    ]
  },
  // Wheel of Lunch
  {
    id: 'wheel-of-lunch',
    name: 'Wheel Of Lunch',
    description: "Can't decide on lunch? Spin the Wheel of Lunch for tasty meal ideas and break your routine. Great for offices, families, or anyone wanting a fun lunch pick!",
    category: 'Food Wheels',
    segments: [
      { id: '1', text: 'Sandwich', color: '#F59E0B', weight: 1 },
      { id: '2', text: 'Salad', color: '#10B981', weight: 1 },
      { id: '3', text: 'Pizza', color: '#EF4444', weight: 1 },
      { id: '4', text: 'Burger', color: '#F97316', weight: 1 },
      { id: '5', text: 'Sushi', color: '#EAB308', weight: 1 },
      { id: '6', text: 'Pasta', color: '#3B82F6', weight: 1 }
    ]
  },
  // Wheel of Dinner
  {
    id: 'wheel-of-dinner',
    name: 'Wheel of Dinner',
    description: "Not sure what to eat for dinner? Spin the Wheel of Dinner for meal ideas and make dinner planning easy and fun. Perfect for families, roommates, or anyone!",
    category: 'Food Wheels',
    segments: [
      { id: '1', text: 'Steak', color: '#ef4444', weight: 1 },
      { id: '2', text: 'Chicken', color: '#f59e0b', weight: 1 },
      { id: '3', text: 'Fish', color: '#10b981', weight: 1 },
      { id: '4', text: 'Vegetarian', color: '#3b82f6', weight: 1 },
      { id: '5', text: 'Pasta', color: '#8b5cf6', weight: 1 },
      { id: '6', text: 'Soup', color: '#f97316', weight: 1 }
    ]
  },
  // Wheel of Breakfast
  {
    id: 'wheel-of-breakfast',
    name: 'Wheel of Breakfast',
    description: "Start your day right! Spin the Wheel of Breakfast for fun, random breakfast ideas. Great for busy mornings or when you can't decide what to eat.",
    category: 'Food Wheels',
    segments: [
      { id: '1', text: 'Pancakes', color: '#ef4444', weight: 1 },
      { id: '2', text: 'Eggs', color: '#f59e0b', weight: 1 },
      { id: '3', text: 'Cereal', color: '#10b981', weight: 1 },
      { id: '4', text: 'Toast', color: '#3b82f6', weight: 1 },
      { id: '5', text: 'Fruit', color: '#8b5cf6', weight: 1 },
      { id: '6', text: 'Yogurt', color: '#f97316', weight: 1 }
    ]
  },
  // Food Wheel
  {
    id: 'food-wheel',
    name: 'Food Wheel',
    description: "Spin to pick a random food! Perfect for meal planning, food challenges, or discovering new dishes. Add variety to your diet and make every meal an adventure.",
    category: 'Food Wheels',
    segments: [
      { id: '1', text: 'Pizza', color: '#ef4444', weight: 1 },
      { id: '2', text: 'Burger', color: '#f59e0b', weight: 1 },
      { id: '3', text: 'Sushi', color: '#10b981', weight: 1 },
      { id: '4', text: 'Salad', color: '#3b82f6', weight: 1 },
      { id: '5', text: 'Tacos', color: '#8b5cf6', weight: 1 },
      { id: '6', text: 'Pasta', color: '#f97316', weight: 1 }
    ]
  },
  // Fast Food Wheel
  {
    id: 'fast-food-wheel',
    name: 'Fast Food Wheel',
    description: "Craving fast food but can't choose? The Fast Food Wheel spins up popular restaurants and menu ideas, making group decisions easy and fun. Great for road trips, parties, or spontaneous snack runs.",
    category: 'Food Wheels',
    segments: [
      { id: '1', text: 'McDonalds', color: '#ef4444', weight: 1 },
      { id: '2', text: 'KFC', color: '#f59e0b', weight: 1 },
      { id: '3', text: 'Burger King', color: '#10b981', weight: 1 },
      { id: '4', text: 'Subway', color: '#3b82f6', weight: 1 },
      { id: '5', text: 'Dominos', color: '#8b5cf6', weight: 1 },
      { id: '6', text: 'Pizza Hut', color: '#f97316', weight: 1 }
    ]
  },
  // Boy Name Generator
  {
    id: 'boy-name-generator',
    name: 'Boy Name Generator',
    description: "Need a boy name? Spin the Boy Name Generator for baby names, characters, or fun. Discover popular and unique boy names with every spin!",
    category: 'Name Wheels',
    segments: [
      { id: '1', text: 'Liam', color: '#ef4444', weight: 1 },
      { id: '2', text: 'Noah', color: '#f59e0b', weight: 1 },
      { id: '3', text: 'Oliver', color: '#10b981', weight: 1 },
      { id: '4', text: 'Elijah', color: '#3b82f6', weight: 1 },
      { id: '5', text: 'James', color: '#8b5cf6', weight: 1 },
      { id: '6', text: 'Benjamin', color: '#f97316', weight: 1 }
    ]
  },
  // Girl Name Generator
  {
    id: 'girl-name-generator',
    name: 'Girl Name Generator',
    description: "Looking for a girl name? Spin the Girl Name Generator for baby names, characters, or inspiration. Explore beautiful and unique girl names with every spin!",
    category: 'Name Wheels',
    segments: [
      { id: '1', text: 'Olivia', color: '#ef4444', weight: 1 },
      { id: '2', text: 'Emma', color: '#f59e0b', weight: 1 },
      { id: '3', text: 'Ava', color: '#10b981', weight: 1 },
      { id: '4', text: 'Charlotte', color: '#3b82f6', weight: 1 },
      { id: '5', text: 'Sophia', color: '#8b5cf6', weight: 1 },
      { id: '6', text: 'Amelia', color: '#f97316', weight: 1 }
    ]
  },
  // Pet Name Generator
  {
    id: 'pet-name-generator',
    name: 'Pet Name Generator',
    description: "Need a pet name? Spin the Pet Name Generator for creative, fun names for dogs, cats, or any pet. Find the perfect name for your furry friend with every spin!",
    category: 'Name Wheels',
    segments: [
      { id: '1', text: 'Buddy', color: '#ef4444', weight: 1 },
      { id: '2', text: 'Bella', color: '#f59e0b', weight: 1 },
      { id: '3', text: 'Charlie', color: '#10b981', weight: 1 },
      { id: '4', text: 'Lucy', color: '#3b82f6', weight: 1 },
      { id: '5', text: 'Max', color: '#8b5cf6', weight: 1 },
      { id: '6', text: 'Daisy', color: '#f97316', weight: 1 }
    ]
  },
  // Dog Name Generator
  {
    id: 'dog-name-generator',
    name: 'Dog Name Generator',
    description: "Need a dog name? Spin the Dog Name Generator for unique, memorable names for your pup. Perfect for new dog owners, breeders, or anyone seeking inspiration!",
    category: 'Name Wheels',
    segments: [
      { id: '1', text: 'Bailey', color: '#ef4444', weight: 1 },
      { id: '2', text: 'Cooper', color: '#f59e0b', weight: 1 },
      { id: '3', text: 'Duke', color: '#10b981', weight: 1 },
      { id: '4', text: 'Sadie', color: '#3b82f6', weight: 1 },
      { id: '5', text: 'Molly', color: '#8b5cf6', weight: 1 },
      { id: '6', text: 'Rocky', color: '#f97316', weight: 1 }
    ]
  },
  // Cat Name Generator
  {
    id: 'cat-name-generator',
    name: 'Cat Name Generator',
    description: "Need a cat name? Spin the Cat Name Generator for cute, quirky names for your new feline friend. Great for cat lovers, shelters, or anyone adopting a cat!",
    category: 'Name Wheels',
    segments: [
      { id: '1', text: 'Luna', color: '#ef4444', weight: 1 },
      { id: '2', text: 'Simba', color: '#f59e0b', weight: 1 },
      { id: '3', text: 'Milo', color: '#10b981', weight: 1 },
      { id: '4', text: 'Nala', color: '#3b82f6', weight: 1 },
      { id: '5', text: 'Leo', color: '#8b5cf6', weight: 1 },
      { id: '6', text: 'Zoe', color: '#f97316', weight: 1 }
    ]
  },
  // Last Name Generator
  {
    id: 'last-name-generator',
    name: 'Last Name Generator',
    description: "Need a last name? Spin the Last Name Generator for a wide range of surnames. Perfect for writers, games, or anyone needing a surname for a character or project.",
    category: 'Name Wheels',
    segments: [
      { id: '1', text: 'Smith', color: '#ef4444', weight: 1 },
      { id: '2', text: 'Johnson', color: '#f59e0b', weight: 1 },
      { id: '3', text: 'Williams', color: '#10b981', weight: 1 },
      { id: '4', text: 'Brown', color: '#3b82f6', weight: 1 },
      { id: '5', text: 'Jones', color: '#8b5cf6', weight: 1 },
      { id: '6', text: 'Garcia', color: '#f97316', weight: 1 }
    ]
  },
  // First Name Generator
  {
    id: 'first-name-generator',
    name: 'First Name Generator',
    description: "Need a first name? Spin the First Name Generator for classic, modern, and unique names. Great for naming characters, babies, or just for fun!",
    category: 'Name Wheels',
    segments: [
      { id: '1', text: 'James', color: '#ef4444', weight: 1 },
      { id: '2', text: 'Mary', color: '#f59e0b', weight: 1 },
      { id: '3', text: 'John', color: '#10b981', weight: 1 },
      { id: '4', text: 'Patricia', color: '#3b82f6', weight: 1 },
      { id: '5', text: 'Robert', color: '#8b5cf6', weight: 1 },
      { id: '6', text: 'Jennifer', color: '#f97316', weight: 1 }
    ]
  },
  // Teacher Names
  {
    id: 'teacher-names',
    name: 'Teacher Names Wheel',
    description: "Need a teacher name? Spin the Teacher Names Wheel for classic, creative, and fun names. Perfect for classroom stories, games, projects, or characters.",
    category: 'Name & Team Wheels',
    segments: [
      { id: '1', text: 'Mr. Smith', color: '#ef4444', weight: 1 },
      { id: '2', text: 'Ms. Johnson', color: '#f59e0b', weight: 1 },
      { id: '3', text: 'Mrs. Brown', color: '#10b981', weight: 1 },
      { id: '4', text: 'Mr. Garcia', color: '#3b82f6', weight: 1 },
      { id: '5', text: 'Ms. Lee', color: '#8b5cf6', weight: 1 },
      { id: '6', text: 'Mrs. Martinez', color: '#f97316', weight: 1 }
    ]
  },
  // Team Name Generator
  {
    id: 'team-name-generator',
    name: 'Team Name Generator',
    description: "Need a team name? Spin the Team Name Generator for cool, funny, and powerful names for sports, trivia, or projects. Find a name that unites and inspires your team!",
    category: 'Name & Team Wheels',
    segments: [
      { id: '1', text: 'The Tigers', color: '#ef4444', weight: 1 },
      { id: '2', text: 'The Eagles', color: '#f59e0b', weight: 1 },
      { id: '3', text: 'The Sharks', color: '#10b981', weight: 1 },
      { id: '4', text: 'The Wolves', color: '#3b82f6', weight: 1 },
      { id: '5', text: 'The Dragons', color: '#8b5cf6', weight: 1 },
      { id: '6', text: 'The Bears', color: '#f97316', weight: 1 }
    ]
  },
  // Random Drawing Generator Wheel
  {
    id: 'random-drawing-generator-wheel',
    name: 'Random Drawing Generator Wheel',
    description: "Spin to pick a random drawing idea or winner! Perfect for art prompts, contests, or creative inspiration. Make every draw fair and fun.",
    category: 'Game & Fun Wheels',
    segments: [
      { id: '1', text: 'A cat in a hat', color: '#ef4444', weight: 1 },
      { id: '2', text: 'A flying car', color: '#f59e0b', weight: 1 },
      { id: '3', text: 'A dragon', color: '#10b981', weight: 1 },
      { id: '4', text: 'A superhero', color: '#3b82f6', weight: 1 },
      { id: '5', text: 'A castle', color: '#8b5cf6', weight: 1 },
      { id: '6', text: 'A robot', color: '#f97316', weight: 1 }
    ]
  },
  // What To Draw
  {
    id: 'what-to-draw',
    name: 'What To Draw Wheel',
    description: "In need of artistic inspiration? Spin the What To Draw Wheel for creative prompts to overcome artist's block and start your next masterpiece.",
    category: 'Game & Fun Wheels',
    segments: [
      { id: '1', text: 'A treehouse', color: '#ef4444', weight: 1 },
      { id: '2', text: 'A spaceship', color: '#f59e0b', weight: 1 },
      { id: '3', text: 'A mountain', color: '#10b981', weight: 1 },
      { id: '4', text: 'A mermaid', color: '#3b82f6', weight: 1 },
      { id: '5', text: 'A unicorn', color: '#8b5cf6', weight: 1 },
      { id: '6', text: 'A pirate ship', color: '#f97316', weight: 1 }
    ]
  },
  // Raffle Generator Wheel
  {
    id: 'raffle-generator-wheel',
    name: 'Raffle Generator Wheel',
    description: "Host a fair and exciting raffle! Spin to select winners for events, fundraisers, or giveaways. Add suspense and fun to your next drawing.",
    category: 'Game & Fun Wheels',
    segments: [
      { id: '1', text: 'Ticket 1', color: '#ef4444', weight: 1 },
      { id: '2', text: 'Ticket 2', color: '#f59e0b', weight: 1 },
      { id: '3', text: 'Ticket 3', color: '#10b981', weight: 1 },
      { id: '4', text: 'Ticket 4', color: '#3b82f6', weight: 1 },
      { id: '5', text: 'Ticket 5', color: '#8b5cf6', weight: 1 },
      { id: '6', text: 'Ticket 6', color: '#f97316', weight: 1 }
    ]
  },
  // Giveaway Generator Wheel
  {
    id: 'giveaway-generator-wheel',
    name: 'Giveaway Generator Wheel',
    description: "Effortlessly pick giveaway winners! Use this wheel for social media contests, promotions, or events. Make every giveaway engaging and fair.",
    category: 'Game & Fun Wheels',
    segments: [
      { id: '1', text: 'Entry 1', color: '#ef4444', weight: 1 },
      { id: '2', text: 'Entry 2', color: '#f59e0b', weight: 1 },
      { id: '3', text: 'Entry 3', color: '#10b981', weight: 1 },
      { id: '4', text: 'Entry 4', color: '#3b82f6', weight: 1 },
      { id: '5', text: 'Entry 5', color: '#8b5cf6', weight: 1 },
      { id: '6', text: 'Entry 6', color: '#f97316', weight: 1 }
    ]
  },
  // Winner Wheel
  {
    id: 'winner-wheel',
    name: 'Winner Wheel',
    description: "Celebrate your champions! Spin the Winner Wheel to pick winners for contests, raffles, or games. Add excitement and fairness to your next event!",
    category: 'Game & Fun Wheels',
    segments: [
      { id: '1', text: 'Winner 1', color: '#ef4444', weight: 1 },
      { id: '2', text: 'Winner 2', color: '#f59e0b', weight: 1 },
      { id: '3', text: 'Winner 3', color: '#10b981', weight: 1 },
      { id: '4', text: 'Winner 4', color: '#3b82f6', weight: 1 },
      { id: '5', text: 'Winner 5', color: '#8b5cf6', weight: 1 },
      { id: '6', text: 'Winner 6', color: '#f97316', weight: 1 }
    ]
  },
  // Random Song Generator
  {
    id: 'random-song-generator',
    name: 'Random Song Generator',
    description: "Need a song? Spin the Random Song Generator for music games, party playlists, or discovering new tunes. Let the wheel surprise you with every spin!",
    category: 'Entertainment Wheels',
    segments: [
      { id: '1', text: 'Song 1', color: '#ef4444', weight: 1 },
      { id: '2', text: 'Song 2', color: '#f59e0b', weight: 1 },
      { id: '3', text: 'Song 3', color: '#10b981', weight: 1 },
      { id: '4', text: 'Song 4', color: '#3b82f6', weight: 1 },
      { id: '5', text: 'Song 5', color: '#8b5cf6', weight: 1 },
      { id: '6', text: 'Song 6', color: '#f97316', weight: 1 }
    ]
  },
  // Random Place Generator
  {
    id: 'random-place-generator',
    name: 'Random Place Generator',
    description: "Explore the world! Spin the Random Place Generator for travel inspiration, geography games, or learning about new destinations—right from your screen.",
    category: 'Entertainment Wheels',
    segments: [
      { id: '1', text: 'Paris', color: '#ef4444', weight: 1 },
      { id: '2', text: 'New York', color: '#f59e0b', weight: 1 },
      { id: '3', text: 'Tokyo', color: '#10b981', weight: 1 },
      { id: '4', text: 'London', color: '#3b82f6', weight: 1 },
      { id: '5', text: 'Sydney', color: '#8b5cf6', weight: 1 },
      { id: '6', text: 'Rio de Janeiro', color: '#f97316', weight: 1 }
    ]
  },
  // Game Spinner Wheel
  {
    id: 'game-spinner-wheel',
    name: 'Game Spinner Wheel',
    description: "Can't decide what to play? Spin the Game Spinner Wheel for random games or activities. Perfect for family nights, parties, or adding fun to any gathering!",
    category: 'Entertainment Wheels',
    segments: [
      { id: '1', text: 'Charades', color: '#ef4444', weight: 1 },
      { id: '2', text: 'Pictionary', color: '#f59e0b', weight: 1 },
      { id: '3', text: 'Trivia', color: '#10b981', weight: 1 },
      { id: '4', text: 'Board Game', color: '#3b82f6', weight: 1 },
      { id: '5', text: 'Card Game', color: '#8b5cf6', weight: 1 },
      { id: '6', text: 'Video Game', color: '#f97316', weight: 1 }
    ]
  },
  // Dog Breed Selector
  {
    id: 'dog-breed-selector',
    name: 'Dog Breed Selector',
    description: "Discover a new dog breed! Spin the Dog Breed Selector for fun, learning, or inspiration. Great for dog lovers, breeders, or anyone curious about breeds.",
    category: 'Entertainment Wheels',
    segments: [
      { id: '1', text: 'Labrador Retriever', color: '#ef4444', weight: 1 },
      { id: '2', text: 'German Shepherd', color: '#f59e0b', weight: 1 },
      { id: '3', text: 'Golden Retriever', color: '#10b981', weight: 1 },
      { id: '4', text: 'Bulldog', color: '#3b82f6', weight: 1 },
      { id: '5', text: 'Beagle', color: '#8b5cf6', weight: 1 },
      { id: '6', text: 'Poodle', color: '#f97316', weight: 1 }
    ]
  },
  // Does He Love Me
  {
    id: 'does-he-love-me',
    name: 'Does He Love Me',
    description: "Curious about love? Spin the Does He Love Me Wheel for playful answers to your romantic questions. Perfect for parties, games, or just for fun!",
    category: 'Fun Wheels',
    segments: [
      { id: '1', text: 'Yes', color: '#ef4444', weight: 1 },
      { id: '2', text: 'No', color: '#f59e0b', weight: 1 },
      { id: '3', text: 'Maybe', color: '#10b981', weight: 1 },
      { id: '4', text: 'Ask again', color: '#3b82f6', weight: 1 },
      { id: '5', text: 'Definitely', color: '#8b5cf6', weight: 1 },
      { id: '6', text: 'Unlikely', color: '#f97316', weight: 1 }
    ]
  },
  // Does She Love Me
  {
    id: 'does-she-love-me',
    name: 'Does She Love Me',
    description: "Wondering if she loves you? Spin the Does She Love Me Wheel for lighthearted answers. Great for parties, sleepovers, or fun with friends!",
    category: 'Fun Wheels',
    segments: [
      { id: '1', text: 'Yes', color: '#ef4444', weight: 1 },
      { id: '2', text: 'No', color: '#f59e0b', weight: 1 },
      { id: '3', text: 'Maybe', color: '#10b981', weight: 1 },
      { id: '4', text: 'Ask again', color: '#3b82f6', weight: 1 },
      { id: '5', text: 'Definitely', color: '#8b5cf6', weight: 1 },
      { id: '6', text: 'Unlikely', color: '#f97316', weight: 1 }
    ]
  },
  // What Should I Do Today
  {
    id: 'what-should-i-do-today',
    name: 'What Should I Do Today',
    description: "Stuck in a rut? Spin the What Should I Do Today Wheel for new hobbies, adventures, or ways to make the most of your day. Get inspired instantly!",
    category: 'Decision Wheels',
    segments: [
      { id: '1', text: 'Go for a walk', color: '#ef4444', weight: 1 },
      { id: '2', text: 'Read a book', color: '#f59e0b', weight: 1 },
      { id: '3', text: 'Watch a movie', color: '#10b981', weight: 1 },
      { id: '4', text: 'Call a friend', color: '#3b82f6', weight: 1 },
      { id: '5', text: 'Cook something', color: '#8b5cf6', weight: 1 },
      { id: '6', text: 'Play a game', color: '#f97316', weight: 1 }
    ]
  },
  // Random Animal Generator Wheel
  {
    id: 'random-animal-generator-wheel',
    name: 'Random Animal Generator Wheel',
    description: "Discover the animal kingdom! Spin the Random Animal Generator Wheel to meet creatures big and small. Great for games, learning, or creative inspiration.",
    category: 'Custom Wheels',
    segments: [
      { id: '1', text: 'Cat', color: '#ef4444', weight: 1 },
      { id: '2', text: 'Dog', color: '#f59e0b', weight: 1 },
      { id: '3', text: 'Elephant', color: '#10b981', weight: 1 },
      { id: '4', text: 'Lion', color: '#3b82f6', weight: 1 },
      { id: '5', text: 'Tiger', color: '#8b5cf6', weight: 1 },
      { id: '6', text: 'Monkey', color: '#f97316', weight: 1 }
    ]
  },
  // What to Watch Wheel
  {
    id: 'what-to-watch-wheel',
    name: 'What To Watch Wheel',
    description: "Movie night made easy! Spin the What To Watch Wheel to pick the perfect film or show. Discover new favorites and settle group debates instantly.",
    category: 'Entertainment Wheels',
    segments: [
      { id: '1', text: 'Action', color: '#ef4444', weight: 1 },
      { id: '2', text: 'Comedy', color: '#f59e0b', weight: 1 },
      { id: '3', text: 'Drama', color: '#10b981', weight: 1 },
      { id: '4', text: 'Horror', color: '#3b82f6', weight: 1 },
      { id: '5', text: 'Romance', color: '#8b5cf6', weight: 1 },
      { id: '6', text: 'Documentary', color: '#f97316', weight: 1 }
    ]
  },
  // Win or Lose
  {
    id: 'win-or-lose',
    name: 'Win Or Lose Wheel',
    description: "Will you win or lose? Spin the Win or Lose Wheel to add suspense to any game or decision. Settle bets or add a fun twist to your activities!",
    category: 'Game & Fun Wheels',
    segments: [
      { id: '1', text: 'Win', color: '#10b981', weight: 1 },
      { id: '2', text: 'Lose', color: '#ef4444', weight: 1 }
    ]
  },
  // A Or B
  {
    id: 'a-or-b',
    name: 'A Or B Wheel',
    description: "Can't decide between two options? Spin the A or B Wheel for a quick, unbiased answer. Perfect for making simple choices fun and easy.",
    category: 'Decision Wheels',
    segments: [
      { id: '1', text: 'A', color: '#EF4444', weight: 1 },
      { id: '2', text: 'B', color: '#F97316', weight: 1 },
    ]
  },

  // Activities To Do Inside
  {
    id: 'activities-to-do-inside',
    name: 'Activities To Do Inside',
    description: "Find your next indoor activity! Spin for creative, fun, and engaging ideas to enjoy at home, with family, or friends—beat boredom instantly.",
    category: 'Custom Wheels',
    segments: [
      { id: '1', text: 'Option 1', color: '#EF4444', weight: 1 },
      { id: '2', text: 'Option 2', color: '#F97316', weight: 1 },
      { id: '3', text: 'Option 3', color: '#EAB308', weight: 1 },
      { id: '4', text: 'Option 4', color: '#22C55E', weight: 1 },
      { id: '5', text: 'Option 5', color: '#14B8A6', weight: 1 },
      { id: '6', text: 'Option 6', color: '#3B82F6', weight: 1 },
    ]
  },

  // Aesthetics Masterlist
  {
    id: 'aesthetics-masterlist',
    name: 'Aesthetics Masterlist Wheel',
    description: "Find your aesthetic! Spin the Aesthetics Masterlist Wheel for styles, vibes, and trends. Perfect for artists, writers, and creators seeking inspiration.",
    category: 'Aesthetic Wheels',
    segments: [
      { id: '1', text: 'Option 1', color: '#EF4444', weight: 1 },
      { id: '2', text: 'Option 2', color: '#F97316', weight: 1 },
      { id: '3', text: 'Option 3', color: '#EAB308', weight: 1 },
      { id: '4', text: 'Option 4', color: '#22C55E', weight: 1 },
      { id: '5', text: 'Option 5', color: '#14B8A6', weight: 1 },
      { id: '6', text: 'Option 6', color: '#3B82F6', weight: 1 },
    ]
  },

  // Aesthetics Wheel
  {
    id: 'aesthetics-wheel',
    name: 'Aesthetics Wheel',
    description: "Explore new styles! Spin the Aesthetics Wheel for curated aesthetics. Refresh your wardrobe, art, or social media with creative inspiration.",
    category: 'Aesthetic Wheels',
    segments: [
      { id: '1', text: 'Option 1', color: '#EF4444', weight: 1 },
      { id: '2', text: 'Option 2', color: '#F97316', weight: 1 },
      { id: '3', text: 'Option 3', color: '#EAB308', weight: 1 },
      { id: '4', text: 'Option 4', color: '#22C55E', weight: 1 },
      { id: '5', text: 'Option 5', color: '#14B8A6', weight: 1 },
      { id: '6', text: 'Option 6', color: '#3B82F6', weight: 1 },
    ]
  },

  // All Gen 1 Pokemon
  {
    id: 'all-gen-1-pokemon',
    name: 'All Gen 1 Pokemon',
    description: "Relive the classics! Spin the All Gen 1 Pokemon Wheel to pick your favorite, a drawing subject, or a team member for your nostalgic journey.",
    category: 'Gaming Wheels',
    segments: [
      { id: '1', text: 'Fire', color: '#EF4444', weight: 1 },
      { id: '2', text: 'Water', color: '#F97316', weight: 1 },
      { id: '3', text: 'Grass', color: '#EAB308', weight: 1 },
      { id: '4', text: 'Electric', color: '#22C55E', weight: 1 },
      { id: '5', text: 'Psychic', color: '#14B8A6', weight: 1 },
      { id: '6', text: 'Fighting', color: '#3B82F6', weight: 1 },
      { id: '7', text: 'Flying', color: '#6366F1', weight: 1 },
      { id: '8', text: 'Poison', color: '#8B5CF6', weight: 1 },
      { id: '9', text: 'Ground', color: '#EC4899', weight: 1 },
      { id: '10', text: 'Rock', color: '#F59E0B', weight: 1 },
      { id: '11', text: 'Ice', color: '#10B981', weight: 1 },
      { id: '12', text: 'Bug', color: '#06B6D4', weight: 1 },
    ]
  },

  // All Nba Teams
  {
    id: 'all-nba-teams',
    name: 'All Nba Teams',
    description: "Which NBA team will you get? Spin the All NBA Teams Wheel for fans, drafts, or competitions. Pick a team, learn fun facts, or add excitement to game night!",
    category: 'Sports Wheels',
    segments: [
      { id: '1', text: 'Lakers', color: '#EF4444', weight: 1 },
      { id: '2', text: 'Celtics', color: '#F97316', weight: 1 },
      { id: '3', text: 'Bulls', color: '#EAB308', weight: 1 },
      { id: '4', text: 'Warriors', color: '#22C55E', weight: 1 },
      { id: '5', text: 'Heat', color: '#14B8A6', weight: 1 },
      { id: '6', text: 'Knicks', color: '#3B82F6', weight: 1 },
      { id: '7', text: 'Mavericks', color: '#6366F1', weight: 1 },
      { id: '8', text: 'Nets', color: '#8B5CF6', weight: 1 },
    ]
  },

  // Animal Wheel Includes A Ton Of Animals
  {
    id: 'animal-wheel-includes-a-ton-of-animals',
    name: 'Animal Wheel Includes A Ton Of Animals',
    description: "Explore the animal kingdom! Spin the Animal Wheel for a huge variety of creatures. Discover new animals, inspire art, or add excitement to your games.",
    category: 'Custom Wheels',
    segments: [
      { id: '1', text: 'Option 1', color: '#EF4444', weight: 1 },
      { id: '2', text: 'Option 2', color: '#F97316', weight: 1 },
      { id: '3', text: 'Option 3', color: '#EAB308', weight: 1 },
      { id: '4', text: 'Option 4', color: '#22C55E', weight: 1 },
      { id: '5', text: 'Option 5', color: '#14B8A6', weight: 1 },
      { id: '6', text: 'Option 6', color: '#3B82F6', weight: 1 },
    ]
  },

  // Anime  Wheel
  {
    id: 'anime-wheel',
    name: 'Anime Wheel',
    description: "Step into anime! Spin the Anime Wheel for a wide range of characters, genres, and shows. Find your next favorite anime or cosplay idea.",
    category: 'Entertainment Wheels',
    segments: [
      { id: '1', text: 'Naruto', color: '#EF4444', weight: 1 },
      { id: '2', text: 'Dragon Ball', color: '#F97316', weight: 1 },
      { id: '3', text: 'One Piece', color: '#EAB308', weight: 1 },
      { id: '4', text: 'Attack on Titan', color: '#22C55E', weight: 1 },
      { id: '5', text: 'My Hero Academia', color: '#14B8A6', weight: 1 },
      { id: '6', text: 'Demon Slayer', color: '#3B82F6', weight: 1 },
    ]
  },

  // Anime Characters
  {
    id: 'anime-characters',
    name: 'Anime Characters Wheel',
    description: "Which anime character will you get? Spin the Anime Characters Wheel for fans, artists, and cosplayers. Discover new characters or drawing prompts.",
    category: 'Entertainment Wheels',
    segments: [
      { id: '1', text: 'Naruto', color: '#EF4444', weight: 1 },
      { id: '2', text: 'Dragon Ball', color: '#F97316', weight: 1 },
      { id: '3', text: 'One Piece', color: '#EAB308', weight: 1 },
      { id: '4', text: 'Attack on Titan', color: '#22C55E', weight: 1 },
      { id: '5', text: 'My Hero Academia', color: '#14B8A6', weight: 1 },
      { id: '6', text: 'Demon Slayer', color: '#3B82F6', weight: 1 },
    ]
  },

  // Apex Legends Character Randomizer
  {
    id: 'apex-legends-character-randomizer',
    name: 'Apex Legends Character Randomizer',
    description: "Drop into the action! Spin the Apex Legends Character Randomizer Wheel to pick a legend for your next match. Challenge yourself and try new strategies.",
    category: 'Gaming Wheels',
    segments: [
      { id: '1', text: 'Option 1', color: '#EF4444', weight: 1 },
      { id: '2', text: 'Option 2', color: '#F97316', weight: 1 },
      { id: '3', text: 'Option 3', color: '#EAB308', weight: 1 },
      { id: '4', text: 'Option 4', color: '#22C55E', weight: 1 },
      { id: '5', text: 'Option 5', color: '#14B8A6', weight: 1 },
      { id: '6', text: 'Option 6', color: '#3B82F6', weight: 1 },
    ]
  },

  // Bingo
  {
    id: 'bingo',
    name: 'Bingo Wheel',
    description: "Ready for a classic game? Spin the Bingo Wheel for exciting, fair rounds. Call numbers, add suspense, or create your own bingo experience for parties and classrooms.",
    category: 'Game & Fun Wheels',
    segments: [
      { id: '1', text: 'Option 1', color: '#EF4444', weight: 1 },
      { id: '2', text: 'Option 2', color: '#F97316', weight: 1 },
      { id: '3', text: 'Option 3', color: '#EAB308', weight: 1 },
      { id: '4', text: 'Option 4', color: '#22C55E', weight: 1 },
      { id: '5', text: 'Option 5', color: '#14B8A6', weight: 1 },
      { id: '6', text: 'Option 6', color: '#3B82F6', weight: 1 },
    ]
  },

  // Boy Names
  {
    id: 'boy-names',
    name: 'Boy Names Wheel',
    description: "Find the perfect boy's name! Spin the Boy Names Wheel for traditional, modern, and unique names. Great for baby names, characters, or just for fun.",
    category: 'Name & Team Wheels',
    segments: [
      { id: '1', text: 'James', color: '#EF4444', weight: 1 },
      { id: '2', text: 'John', color: '#F97316', weight: 1 },
      { id: '3', text: 'Michael', color: '#EAB308', weight: 1 },
      { id: '4', text: 'David', color: '#22C55E', weight: 1 },
      { id: '5', text: 'Robert', color: '#14B8A6', weight: 1 },
      { id: '6', text: 'William', color: '#3B82F6', weight: 1 },
    ]
  },

  // Brasileiro Teams
  {
    id: 'brasileiro-teams',
    name: 'Brasileiro Teams',
    description: "Pick a random Brazilian football team! Great for fans, games, or friendly competitions. Discover and support a new team with every spin.",
    category: 'Sports Wheels',
    segments: [
      { id: '1', text: 'Option 1', color: '#EF4444', weight: 1 },
      { id: '2', text: 'Option 2', color: '#F97316', weight: 1 },
      { id: '3', text: 'Option 3', color: '#EAB308', weight: 1 },
      { id: '4', text: 'Option 4', color: '#22C55E', weight: 1 },
      { id: '5', text: 'Option 5', color: '#14B8A6', weight: 1 },
      { id: '6', text: 'Option 6', color: '#3B82F6', weight: 1 },
    ]
  },

  // Cartoon Characters
  {
    id: 'cartoon-characters',
    name: 'Cartoon Characters Wheel',
    description: "Which cartoon character will you get? Spin the Cartoon Characters Wheel for party games, drawing prompts, or cosplay inspiration. Discover favorites old and new!",
    category: 'Entertainment Wheels',
    segments: [
      { id: '1', text: 'Option 1', color: '#EF4444', weight: 1 },
      { id: '2', text: 'Option 2', color: '#F97316', weight: 1 },
      { id: '3', text: 'Option 3', color: '#EAB308', weight: 1 },
      { id: '4', text: 'Option 4', color: '#22C55E', weight: 1 },
      { id: '5', text: 'Option 5', color: '#14B8A6', weight: 1 },
      { id: '6', text: 'Option 6', color: '#3B82F6', weight: 1 },
    ]
  },

  // Celebrity Wheel 2pBI
  {
    id: 'celebrity-wheel',
    name: 'Celebrity Wheel',
    description: "Step into the spotlight! Spin the Celebrity Wheel for stars from movies, music, and more. Pick a celebrity for games, trivia, or your next event!",
    category: 'Entertainment Wheels',
    segments: [
      { id: '1', text: 'Option 1', color: '#EF4444', weight: 1 },
      { id: '2', text: 'Option 2', color: '#F97316', weight: 1 },
      { id: '3', text: 'Option 3', color: '#EAB308', weight: 1 },
      { id: '4', text: 'Option 4', color: '#22C55E', weight: 1 },
      { id: '5', text: 'Option 5', color: '#14B8A6', weight: 1 },
      { id: '6', text: 'Option 6', color: '#3B82F6', weight: 1 },
    ]
  },

  // Characters Hair Color
  {
    id: 'characters-hair-color',
    name: 'Characters Hair Color',
    description: 'Spin the Characters Hair Color wheel for random options. Great for games, decisions, and adding fun to any activity. Try it now and let chance decide!',
    category: 'Color & Number Wheels',
    segments: [
      { id: '1', text: 'Option 1', color: '#EF4444', weight: 1 },
      { id: '2', text: 'Option 2', color: '#F97316', weight: 1 },
      { id: '3', text: 'Option 3', color: '#EAB308', weight: 1 },
      { id: '4', text: 'Option 4', color: '#22C55E', weight: 1 },
      { id: '5', text: 'Option 5', color: '#14B8A6', weight: 1 },
      { id: '6', text: 'Option 6', color: '#3B82F6', weight: 1 },
    ]
  },

  // Charades Wheel
  {
    id: 'charades-wheel',
    name: 'Charades Wheel',
    description: "Bring your party to life! Spin the Charades Wheel for fun prompts for all ages. Get your next charade idea and keep everyone laughing and guessing!",
    category: 'Game & Fun Wheels',
    segments: [
      { id: '1', text: 'Option 1', color: '#EF4444', weight: 1 },
      { id: '2', text: 'Option 2', color: '#F97316', weight: 1 },
      { id: '3', text: 'Option 3', color: '#EAB308', weight: 1 },
      { id: '4', text: 'Option 4', color: '#22C55E', weight: 1 },
      { id: '5', text: 'Option 5', color: '#14B8A6', weight: 1 },
      { id: '6', text: 'Option 6', color: '#3B82F6', weight: 1 },
    ]
  },

  // College Teams
  {
    id: 'college-teams',
    name: 'College Teams',
    description: "Show your school spirit! Spin the College Teams Wheel for sports fans, trivia nights, or competitions. Pick a team, learn, or add excitement to your events!",
    category: 'Sports Wheels',
    segments: [
      { id: '1', text: 'Option 1', color: '#EF4444', weight: 1 },
      { id: '2', text: 'Option 2', color: '#F97316', weight: 1 },
      { id: '3', text: 'Option 3', color: '#EAB308', weight: 1 },
      { id: '4', text: 'Option 4', color: '#22C55E', weight: 1 },
      { id: '5', text: 'Option 5', color: '#14B8A6', weight: 1 },
      { id: '6', text: 'Option 6', color: '#3B82F6', weight: 1 },
    ]
  },

  // Colleges 2Idj
  {
    id: 'colleges-wheel',
    name: 'Colleges Wheel',
    description: "Discover new schools! Spin the Colleges Wheel for a variety of colleges and universities. Learn, pick a school for games, or inspire your next adventure!",
    category: 'Custom Wheels',
    segments: [
      { id: '1', text: 'Option 1', color: '#EF4444', weight: 1 },
      { id: '2', text: 'Option 2', color: '#F97316', weight: 1 },
      { id: '3', text: 'Option 3', color: '#EAB308', weight: 1 },
      { id: '4', text: 'Option 4', color: '#22C55E', weight: 1 },
      { id: '5', text: 'Option 5', color: '#14B8A6', weight: 1 },
      { id: '6', text: 'Option 6', color: '#3B82F6', weight: 1 },
    ]
  },

  // Color Name List Of Color Wheel
  {
    id: 'color-name-list-of-color-wheel',
    name: 'Color Name List Of Color Wheel',
    description: "Explore the world of color! Spin the Color Name List Of Color Wheel for artists, designers, and students. Discover new shades or inspire your next project!",
    category: 'Color & Number Wheels',
    segments: [
      { id: '1', text: 'Option 1', color: '#EF4444', weight: 1 },
      { id: '2', text: 'Option 2', color: '#F97316', weight: 1 },
      { id: '3', text: 'Option 3', color: '#EAB308', weight: 1 },
      { id: '4', text: 'Option 4', color: '#22C55E', weight: 1 },
      { id: '5', text: 'Option 5', color: '#14B8A6', weight: 1 },
      { id: '6', text: 'Option 6', color: '#3B82F6', weight: 1 },
    ]
  },

  // Color Spiner
  {
    id: 'color-spinner',
    name: 'Color Spinner',
    description: "Add some color to your life! Spin the Color Spinner Wheel for a vibrant selection of hues. Inspire your art, fashion, or home decor choices!",
    category: 'Color & Number Wheels',
    segments: [
      { id: '1', text: 'Red', color: '#EF4444', weight: 1 },
      { id: '2', text: 'Blue', color: '#F97316', weight: 1 },
      { id: '3', text: 'Green', color: '#EAB308', weight: 1 },
      { id: '4', text: 'Yellow', color: '#22C55E', weight: 1 },
      { id: '5', text: 'Purple', color: '#14B8A6', weight: 1 },
      { id: '6', text: 'Orange', color: '#3B82F6', weight: 1 },
    ]
  },

  // Colors
  {
    id: 'colors-wheel',
    name: 'Colors Wheel',
    description: "Celebrate every shade! Spin the Colors Wheel for a rainbow of options for games, learning, or creative inspiration. Discover new favorites and brighten your day!",
    category: 'Color & Number Wheels',
    segments: [
      { id: '1', text: 'Red', color: '#EF4444', weight: 1 },
      { id: '2', text: 'Blue', color: '#F97316', weight: 1 },
      { id: '3', text: 'Green', color: '#EAB308', weight: 1 },
      { id: '4', text: 'Yellow', color: '#22C55E', weight: 1 },
      { id: '5', text: 'Purple', color: '#14B8A6', weight: 1 },
      { id: '6', text: 'Orange', color: '#3B82F6', weight: 1 },
    ]
  },
  // Country Wheel
  {
    id: 'country-wheel',
    name: 'Country Wheel',
    description: "Which country will you get? Spin the Country Wheel for geography games, travel inspiration, or cultural learning. Explore new places and broaden your horizons!",
    category: 'Custom Wheels',
    segments: [
      { id: '1', text: 'Option 1', color: '#EF4444', weight: 1 },
      { id: '2', text: 'Option 2', color: '#F97316', weight: 1 },
      { id: '3', text: 'Option 3', color: '#EAB308', weight: 1 },
      { id: '4', text: 'Option 4', color: '#22C55E', weight: 1 },
      { id: '5', text: 'Option 5', color: '#14B8A6', weight: 1 },
      { id: '6', text: 'Option 6', color: '#3B82F6', weight: 1 },
    ]
  },

  // Dandys World
  {
    id: 'dandys-world',
    name: 'Dandys World',
    description: "Enter Dandy's World! Spin the Dandys World Wheel for unique characters, places, and stories. Spark your imagination, inspire writing, or add fun to your games!",
    category: 'Custom Wheels',
    segments: [
      { id: '1', text: 'Option 1', color: '#EF4444', weight: 1 },
      { id: '2', text: 'Option 2', color: '#F97316', weight: 1 },
      { id: '3', text: 'Option 3', color: '#EAB308', weight: 1 },
      { id: '4', text: 'Option 4', color: '#22C55E', weight: 1 },
      { id: '5', text: 'Option 5', color: '#14B8A6', weight: 1 },
      { id: '6', text: 'Option 6', color: '#3B82F6', weight: 1 },
    ]
  },

  // Dandys World Characters
  {
    id: 'dandys-world-characters',
    name: 'Dandys World Characters',
    description: "Meet new friends! Spin the Dandys World Characters Wheel for quirky and memorable characters. Find inspiration for stories, games, or art projects!",
    category: 'Custom Wheels',
    segments: [
      { id: '1', text: 'Option 1', color: '#EF4444', weight: 1 },
      { id: '2', text: 'Option 2', color: '#F97316', weight: 1 },
      { id: '3', text: 'Option 3', color: '#EAB308', weight: 1 },
      { id: '4', text: 'Option 4', color: '#22C55E', weight: 1 },
      { id: '5', text: 'Option 5', color: '#14B8A6', weight: 1 },
      { id: '6', text: 'Option 6', color: '#3B82F6', weight: 1 },
    ]
  },

  // Dandys World Characters Including Unreleased
  {
    id: 'dandys-world-characters-including-unreleased',
    name: 'Dandys World Characters Including Unreleased',
    description: "Unlock hidden surprises! Spin the Dandys World Characters Including Unreleased Wheel for exclusive and never before seen characters.",
    category: 'Custom Wheels',
    segments: [
      { id: '1', text: 'Option 1', color: '#EF4444', weight: 1 },
      { id: '2', text: 'Option 2', color: '#F97316', weight: 1 },
      { id: '3', text: 'Option 3', color: '#EAB308', weight: 1 },
      { id: '4', text: 'Option 4', color: '#22C55E', weight: 1 },
      { id: '5', text: 'Option 5', color: '#14B8A6', weight: 1 },
      { id: '6', text: 'Option 6', color: '#3B82F6', weight: 1 },
    ]
  },

  // Dandys World Toons
  {
    id: 'dandys-world-toons',
    name: 'Dandys World Toons',
    description: "Step into a cartoon universe! Spin the Dandys World Toons Wheel for animated characters, drawing prompts, or story inspiration.",
    category: 'Custom Wheels',
    segments: [
      { id: '1', text: 'Option 1', color: '#EF4444', weight: 1 },
      { id: '2', text: 'Option 2', color: '#F97316', weight: 1 },
      { id: '3', text: 'Option 3', color: '#EAB308', weight: 1 },
      { id: '4', text: 'Option 4', color: '#22C55E', weight: 1 },
      { id: '5', text: 'Option 5', color: '#14B8A6', weight: 1 },
      { id: '6', text: 'Option 6', color: '#3B82F6', weight: 1 },
    ]
  },

  // Dandys World Trinkets
  {
    id: 'dandys-world-trinkets',
    name: 'Dandys World Trinkets',
    description: "Find magical treasures! Spin the Dandys World Trinkets Wheel for whimsical items to inspire stories, games, or imaginative play.",
    category: 'Custom Wheels',
    segments: [
      { id: '1', text: 'Option 1', color: '#EF4444', weight: 1 },
      { id: '2', text: 'Option 2', color: '#F97316', weight: 1 },
      { id: '3', text: 'Option 3', color: '#EAB308', weight: 1 },
      { id: '4', text: 'Option 4', color: '#22C55E', weight: 1 },
      { id: '5', text: 'Option 5', color: '#14B8A6', weight: 1 },
      { id: '6', text: 'Option 6', color: '#3B82F6', weight: 1 },
    ]
  },

  // Dandys World Wheel
  {
    id: 'dandys-world-wheel',
    name: 'Dandys World Wheel',
    description: "Experience the magic! Spin the Dandys World Wheel for characters, places, and items from Dandy's World to spark your imagination.",
    category: 'Custom Wheels',
    segments: [
      { id: '1', text: 'Option 1', color: '#EF4444', weight: 1 },
      { id: '2', text: 'Option 2', color: '#F97316', weight: 1 },
      { id: '3', text: 'Option 3', color: '#EAB308', weight: 1 },
      { id: '4', text: 'Option 4', color: '#22C55E', weight: 1 },
      { id: '5', text: 'Option 5', color: '#14B8A6', weight: 1 },
      { id: '6', text: 'Option 6', color: '#3B82F6', weight: 1 },
    ]
  },

  // Decision Maker
  {
    id: 'decision-maker',
    name: 'Decision Maker Wheel',
    description: "Make choices with ease! Spin the Decision Maker Wheel to decide between options, settle debates, or add fun to your decision making.",
    category: 'Decision Wheels',
    segments: [
      { id: '1', text: 'Option 1', color: '#EF4444', weight: 1 },
      { id: '2', text: 'Option 2', color: '#F97316', weight: 1 },
      { id: '3', text: 'Option 3', color: '#EAB308', weight: 1 },
      { id: '4', text: 'Option 4', color: '#22C55E', weight: 1 },
      { id: '5', text: 'Option 5', color: '#14B8A6', weight: 1 },
      { id: '6', text: 'Option 6', color: '#3B82F6', weight: 1 },
    ]
  },

  // Disney Character
  {
    id: 'disney-character-wheel',
    name: 'Disney Character Wheel',
    description: "Which Disney character will you get? Spin the Disney Character Wheel for fans, parties, or drawing prompts discover favorites old and new!",
    category: 'Entertainment Wheels',
    segments: [
      { id: '1', text: 'Frozen', color: '#EF4444', weight: 1 },
      { id: '2', text: 'Lion King', color: '#F97316', weight: 1 },
      { id: '3', text: 'Aladdin', color: '#EAB308', weight: 1 },
      { id: '4', text: 'Beauty and the Beast', color: '#22C55E', weight: 1 },
      { id: '5', text: 'Toy Story', color: '#14B8A6', weight: 1 },
      { id: '6', text: 'Finding Nemo', color: '#3B82F6', weight: 1 },
    ]
  },

  // Disney Movie Generator
  {
    id: 'disney-movie-generator',
    name: 'Disney Movie Generator',
    description: "Find your next Disney adventure! Spin the Disney Movie Generator Wheel to pick a film for movie night, parties, or family fun classics and new releases await!",
    category: 'Entertainment Wheels',
    segments: [
      { id: '1', text: 'Frozen', color: '#EF4444', weight: 1 },
      { id: '2', text: 'Lion King', color: '#F97316', weight: 1 },
      { id: '3', text: 'Aladdin', color: '#EAB308', weight: 1 },
      { id: '4', text: 'Beauty and the Beast', color: '#22C55E', weight: 1 },
      { id: '5', text: 'Toy Story', color: '#14B8A6', weight: 1 },
      { id: '6', text: 'Finding Nemo', color: '#3B82F6', weight: 1 },
    ]
  },

  // Disney Movie Picker
  {
    id: 'disney-movie-picker',
    name: 'Disney Movie Picker',
    description: "Can't decide on a Disney movie? Spin the Disney Movie Picker Wheel to make choosing easy and fun for your next magical movie night.",
    category: 'Entertainment Wheels',
    segments: [
      { id: '1', text: 'Frozen', color: '#EF4444', weight: 1 },
      { id: '2', text: 'Lion King', color: '#F97316', weight: 1 },
      { id: '3', text: 'Aladdin', color: '#EAB308', weight: 1 },
      { id: '4', text: 'Beauty and the Beast', color: '#22C55E', weight: 1 },
      { id: '5', text: 'Toy Story', color: '#14B8A6', weight: 1 },
      { id: '6', text: 'Finding Nemo', color: '#3B82F6', weight: 1 },
    ]
  },

  // Drawing Ideas 4hpb
  {
    id: 'drawing-ideas-wheel',
    name: 'Drawing Ideas Wheel',
    description: "Get creative! Spin the Drawing Ideas Wheel for prompts to overcome creative blocks, start a new project, or challenge your artistic skills.",
    category: 'Game & Fun Wheels',
    segments: [
      { id: '1', text: 'Option 1', color: '#EF4444', weight: 1 },
      { id: '2', text: 'Option 2', color: '#F97316', weight: 1 },
      { id: '3', text: 'Option 3', color: '#EAB308', weight: 1 },
      { id: '4', text: 'Option 4', color: '#22C55E', weight: 1 },
      { id: '5', text: 'Option 5', color: '#14B8A6', weight: 1 },
      { id: '6', text: 'Option 6', color: '#3B82F6', weight: 1 },
    ]
  },

  // Dress To Impress Themes
  {
    id: 'dress-to-impress-themes',
    name: 'Dress To Impress Themes',
    description: "Step up your style! Spin the Dress To Impress Themes Wheel for fun and fashionable ideas for parties, events, or creative projects.",
    category: 'Custom Wheels',
    segments: [
      { id: '1', text: 'Option 1', color: '#EF4444', weight: 1 },
      { id: '2', text: 'Option 2', color: '#F97316', weight: 1 },
      { id: '3', text: 'Option 3', color: '#EAB308', weight: 1 },
      { id: '4', text: 'Option 4', color: '#22C55E', weight: 1 },
      { id: '5', text: 'Option 5', color: '#14B8A6', weight: 1 },
      { id: '6', text: 'Option 6', color: '#3B82F6', weight: 1 },
    ]
  },

  // Dti Challenges
  {
    id: 'dti-challenges',
    name: 'Dti Challenges',
    description: "Take on a challenge! Spin the DTI Challenges Wheel for fun and creative prompts for drawing, writing, or games push your limits and try something new.",
    category: 'Game & Fun Wheels',
    segments: [
      { id: '1', text: 'Option 1', color: '#EF4444', weight: 1 },
      { id: '2', text: 'Option 2', color: '#F97316', weight: 1 },
      { id: '3', text: 'Option 3', color: '#EAB308', weight: 1 },
      { id: '4', text: 'Option 4', color: '#22C55E', weight: 1 },
      { id: '5', text: 'Option 5', color: '#14B8A6', weight: 1 },
      { id: '6', text: 'Option 6', color: '#3B82F6', weight: 1 },
    ]
  },

  // Dti Themes
  {
    id: 'dti-themes',
    name: 'Dti Themes',
    description: "Find your next theme! Spin the DTI Themes Wheel for a variety of ideas for art, writing, or parties spark your creativity and start your next project.",
    category: 'Game & Fun Wheels',
    segments: [
      { id: '1', text: 'Option 1', color: '#EF4444', weight: 1 },
      { id: '2', text: 'Option 2', color: '#F97316', weight: 1 },
      { id: '3', text: 'Option 3', color: '#EAB308', weight: 1 },
      { id: '4', text: 'Option 4', color: '#22C55E', weight: 1 },
      { id: '5', text: 'Option 5', color: '#14B8A6', weight: 1 },
      { id: '6', text: 'Option 6', color: '#3B82F6', weight: 1 },
    ]
  },

  // Elemental Wheel
  {
    id: 'elemental-wheel',
    name: 'Elemental Wheel',
    description: "Harness the elements! Spin the Elemental Wheel for inspiration in games, stories, or creative projects explore fire, water, earth, air, and more.",
    category: 'Custom Wheels',
    segments: [
      { id: '1', text: 'Option 1', color: '#EF4444', weight: 1 },
      { id: '2', text: 'Option 2', color: '#F97316', weight: 1 },
      { id: '3', text: 'Option 3', color: '#EAB308', weight: 1 },
      { id: '4', text: 'Option 4', color: '#22C55E', weight: 1 },
      { id: '5', text: 'Option 5', color: '#14B8A6', weight: 1 },
      { id: '6', text: 'Option 6', color: '#3B82F6', weight: 1 },
    ]
  },

  // Elements
  {
    id: 'elements-wheel',
    name: 'Elements Wheel',
    description: "Explore the forces of nature! Spin the Elements Wheel for inspiration in games, stories, or creative projects—discover fire, water, earth, air, and more.",
    category: 'Custom Wheels',
    segments: [
      { id: '1', text: 'Option 1', color: '#EF4444', weight: 1 },
      { id: '2', text: 'Option 2', color: '#F97316', weight: 1 },
      { id: '3', text: 'Option 3', color: '#EAB308', weight: 1 },
      { id: '4', text: 'Option 4', color: '#22C55E', weight: 1 },
      { id: '5', text: 'Option 5', color: '#14B8A6', weight: 1 },
      { id: '6', text: 'Option 6', color: '#3B82F6', weight: 1 },
    ]
  },

  // European Roulette
  {
    id: 'european-roulette',
    name: 'European Roulette',
    description: "Bring the casino home! Spin the European Roulette Wheel for authentic gameplay at parties, game nights, or to learn about probability and test your luck.",
    category: 'Game & Fun Wheels',
    segments: [
      { id: '1', text: 'Option 1', color: '#EF4444', weight: 1 },
      { id: '2', text: 'Option 2', color: '#F97316', weight: 1 },
      { id: '3', text: 'Option 3', color: '#EAB308', weight: 1 },
      { id: '4', text: 'Option 4', color: '#22C55E', weight: 1 },
      { id: '5', text: 'Option 5', color: '#14B8A6', weight: 1 },
      { id: '6', text: 'Option 6', color: '#3B82F6', weight: 1 },
    ]
  },

  // Every Genshin Character
  {
    id: 'every-genshin-character',
    name: 'Every Genshin Character',
    description: "Meet every hero! Spin the Every Genshin Character Wheel to pick your next main, drawing prompt, or cosplay inspiration from Genshin Impact.",
    category: 'Gaming Wheels',
    segments: [
      { id: '1', text: 'Option 1', color: '#EF4444', weight: 1 },
      { id: '2', text: 'Option 2', color: '#F97316', weight: 1 },
      { id: '3', text: 'Option 3', color: '#EAB308', weight: 1 },
      { id: '4', text: 'Option 4', color: '#22C55E', weight: 1 },
      { id: '5', text: 'Option 5', color: '#14B8A6', weight: 1 },
      { id: '6', text: 'Option 6', color: '#3B82F6', weight: 1 },
      { id: '7', text: 'Option 7', color: '#6366F1', weight: 1 },
      { id: '8', text: 'Option 8', color: '#8B5CF6', weight: 1 },
      { id: '9', text: 'Option 9', color: '#EC4899', weight: 1 },
      { id: '10', text: 'Option 10', color: '#F59E0B', weight: 1 },
      { id: '11', text: 'Option 11', color: '#10B981', weight: 1 },
      { id: '12', text: 'Option 12', color: '#06B6D4', weight: 1 },
    ]
  },

  // Every Item In Minecraft
  {
    id: 'every-item-in-minecraft',
    name: 'Every Item In Minecraft',
    description: "Discover Minecraft's treasures! Spin the Every Item In Minecraft Wheel for blocks, tools, and surprises to inspire your next build or challenge.",
    category: 'Gaming Wheels',
    segments: [
      { id: '1', text: 'Option 1', color: '#EF4444', weight: 1 },
      { id: '2', text: 'Option 2', color: '#F97316', weight: 1 },
      { id: '3', text: 'Option 3', color: '#EAB308', weight: 1 },
      { id: '4', text: 'Option 4', color: '#22C55E', weight: 1 },
      { id: '5', text: 'Option 5', color: '#14B8A6', weight: 1 },
      { id: '6', text: 'Option 6', color: '#3B82F6', weight: 1 },
    ]
  },

  // Every Mainline Pokemon Game To Date
  {
    id: 'every-mainline-pokemon-game-to-date',
    name: 'Every Mainline Pokemon Game To Date',
    description: "Spin to select any mainline Pokémon game! Relive classic adventures or discover new ones. Perfect for fans, streamers, or challenge runs.",
    category: 'Gaming Wheels',
    segments: [
      { id: '1', text: 'Fire', color: '#EF4444', weight: 1 },
      { id: '2', text: 'Water', color: '#F97316', weight: 1 },
      { id: '3', text: 'Grass', color: '#EAB308', weight: 1 },
      { id: '4', text: 'Electric', color: '#22C55E', weight: 1 },
      { id: '5', text: 'Psychic', color: '#14B8A6', weight: 1 },
      { id: '6', text: 'Fighting', color: '#3B82F6', weight: 1 },
      { id: '7', text: 'Flying', color: '#6366F1', weight: 1 },
      { id: '8', text: 'Poison', color: '#8B5CF6', weight: 1 },
      { id: '9', text: 'Ground', color: '#EC4899', weight: 1 },
      { id: '10', text: 'Rock', color: '#F59E0B', weight: 1 },
      { id: '11', text: 'Ice', color: '#10B981', weight: 1 },
      { id: '12', text: 'Bug', color: '#06B6D4', weight: 1 },
    ]
  },

  // Every Pokemon
  {
    id: 'every-pokemon',
    name: 'Every Pokemon Wheel',
    description: "Catch them all! Spin the Every Pokemon Wheel to discover and celebrate every Pokémon from the original games to the latest pick your next favorite or team member.",
    category: 'Gaming Wheels',
    segments: [
      { id: '1', text: 'Fire', color: '#EF4444', weight: 1 },
      { id: '2', text: 'Water', color: '#F97316', weight: 1 },
      { id: '3', text: 'Grass', color: '#EAB308', weight: 1 },
      { id: '4', text: 'Electric', color: '#22C55E', weight: 1 },
      { id: '5', text: 'Psychic', color: '#14B8A6', weight: 1 },
      { id: '6', text: 'Fighting', color: '#3B82F6', weight: 1 },
      { id: '7', text: 'Flying', color: '#6366F1', weight: 1 },
      { id: '8', text: 'Poison', color: '#8B5CF6', weight: 1 },
      { id: '9', text: 'Ground', color: '#EC4899', weight: 1 },
      { id: '10', text: 'Rock', color: '#F59E0B', weight: 1 },
      { id: '11', text: 'Ice', color: '#10B981', weight: 1 },
      { id: '12', text: 'Bug', color: '#06B6D4', weight: 1 },
    ]
  },

  // Exercise Wheel
  {
    id: 'exercise-wheel',
    name: 'Exercise Wheel',
    description: "Get moving! Spin the Exercise Wheel for fun and effective workout ideas for all fitness levels add variety, challenge yourself, or make group workouts exciting.",
    category: 'Game & Fun Wheels',
    segments: [
      { id: '1', text: 'Option 1', color: '#EF4444', weight: 1 },
      { id: '2', text: 'Option 2', color: '#F97316', weight: 1 },
      { id: '3', text: 'Option 3', color: '#EAB308', weight: 1 },
      { id: '4', text: 'Option 4', color: '#22C55E', weight: 1 },
      { id: '5', text: 'Option 5', color: '#14B8A6', weight: 1 },
      { id: '6', text: 'Option 6', color: '#3B82F6', weight: 1 },
    ]
  },

  // Eye Colours
  {
    id: 'eye-colours',
    name: 'Eye Colours Wheel',
    description: "Celebrate diversity! Spin the Eye Colours Wheel to discover new shades and add depth to your characters great for artists and storytellers.",
    category: 'Color & Number Wheels',
    segments: [
      { id: '1', text: 'Option 1', color: '#EF4444', weight: 1 },
      { id: '2', text: 'Option 2', color: '#F97316', weight: 1 },
      { id: '3', text: 'Option 3', color: '#EAB308', weight: 1 },
      { id: '4', text: 'Option 4', color: '#22C55E', weight: 1 },
      { id: '5', text: 'Option 5', color: '#14B8A6', weight: 1 },
      { id: '6', text: 'Option 6', color: '#3B82F6', weight: 1 },
    ]
  },

  // Fashion Style
  {
    id: 'fashion-style',
    name: 'Fashion Style Wheel',
    description: "Find your signature look! Spin the Fashion Style Wheel for trends and aesthetics to inspire your next outfit, drawing, or creative project.",
    category: 'Aesthetic Wheels',
    segments: [
      { id: '1', text: 'Option 1', color: '#EF4444', weight: 1 },
      { id: '2', text: 'Option 2', color: '#F97316', weight: 1 },
      { id: '3', text: 'Option 3', color: '#EAB308', weight: 1 },
      { id: '4', text: 'Option 4', color: '#22C55E', weight: 1 },
      { id: '5', text: 'Option 5', color: '#14B8A6', weight: 1 },
      { id: '6', text: 'Option 6', color: '#3B82F6', weight: 1 },
    ]
  },

  // Fast Food Restaurants
  {
    id: 'fast-food-restaurants',
    name: 'Fast Food Restaurants WHeel',
    description: "Which fast food will you try? Spin the Fast Food Restaurants Wheel for popular chains and local favorites discover new places to eat or settle group debates.",
    category: 'Food & Meal Wheels',
    segments: [
      { id: '1', text: 'Pizza', color: '#EF4444', weight: 1 },
      { id: '2', text: 'Burger', color: '#F97316', weight: 1 },
      { id: '3', text: 'Sushi', color: '#EAB308', weight: 1 },
      { id: '4', text: 'Tacos', color: '#22C55E', weight: 1 },
      { id: '5', text: 'Pasta', color: '#14B8A6', weight: 1 },
      { id: '6', text: 'Salad', color: '#3B82F6', weight: 1 },
    ]
  },

  // Films To Watch 
  {
    id: 'films-to-watch',
    name: 'Films To Watch Wheel',
    description: "Movie night solved! Spin the Films To Watch Wheel for a curated list of films for every mood discover classics, hidden gems, or your next favorite movie.",
    category: 'Entertainment Wheels',
    segments: [
      { id: '1', text: 'Option 1', color: '#EF4444', weight: 1 },
      { id: '2', text: 'Option 2', color: '#F97316', weight: 1 },
      { id: '3', text: 'Option 3', color: '#EAB308', weight: 1 },
      { id: '4', text: 'Option 4', color: '#22C55E', weight: 1 },
      { id: '5', text: 'Option 5', color: '#14B8A6', weight: 1 },
      { id: '6', text: 'Option 6', color: '#3B82F6', weight: 1 },
    ]
  },

  // Flip A Coin
  {
    id: 'flip-a-coin',
    name: 'Flip A Coin Wheel',
    description: "Heads or tails? Spin the Flip A Coin Wheel for a digital coin toss—make quick decisions, play games, or settle friendly bets instantly.",
    category: 'Decision Wheels',
    segments: [
      { id: '1', text: 'Heads', color: '#EF4444', weight: 1 },
      { id: '2', text: 'Tails', color: '#F97316', weight: 1 },
      { id: '3', text: 'Tails', color: '#EAB308', weight: 1 },
      { id: '4', text: 'Tails', color: '#22C55E', weight: 1 },
      { id: '5', text: 'Tails', color: '#14B8A6', weight: 1 },
      { id: '6', text: 'Tails', color: '#3B82F6', weight: 1 },
    ]
  },

  // Fortnite Challenge Wheel
  {
    id: 'fortnite-challenge-wheel',
    name: 'Fortnite Challenge Wheel',
    description: "Ready for a new challenge? Spin the Fortnite Challenge Wheel for creative tasks to test your skills and keep your gameplay fresh.",
    category: 'Gaming Wheels',
    segments: [
      { id: '1', text: 'Option 1', color: '#EF4444', weight: 1 },
      { id: '2', text: 'Option 2', color: '#F97316', weight: 1 },
      { id: '3', text: 'Option 3', color: '#EAB308', weight: 1 },
      { id: '4', text: 'Option 4', color: '#22C55E', weight: 1 },
      { id: '5', text: 'Option 5', color: '#14B8A6', weight: 1 },
      { id: '6', text: 'Option 6', color: '#3B82F6', weight: 1 },
    ]
  },

  // Fortnite Challenges What Will U Get
  {
    id: 'fortnite-challenges-what-will-u-get',
    name: 'Fortnite Challenges What Will U Get',
    description: "What will you get? Spin the Fortnite Challenges What Will U Get Wheel for fun and unexpected tasks keep your matches interesting and challenge your friends.",
    category: 'Gaming Wheels',
    segments: [
      { id: '1', text: 'Option 1', color: '#EF4444', weight: 1 },
      { id: '2', text: 'Option 2', color: '#F97316', weight: 1 },
      { id: '3', text: 'Option 3', color: '#EAB308', weight: 1 },
      { id: '4', text: 'Option 4', color: '#22C55E', weight: 1 },
      { id: '5', text: 'Option 5', color: '#14B8A6', weight: 1 },
      { id: '6', text: 'Option 6', color: '#3B82F6', weight: 1 },
    ]
  },

  // Friend Whel
  {
    id: 'friend-wheel',
    name: 'Friend Wheel',
    description: "Celebrate friendship! Spin the Friend Wheel for games, icebreakers, or picking activities discover new ways to connect and have fun together.",
    category: 'Game & Fun Wheels',
    segments: [
      { id: '1', text: 'Option 1', color: '#EF4444', weight: 1 },
      { id: '2', text: 'Option 2', color: '#F97316', weight: 1 },
      { id: '3', text: 'Option 3', color: '#EAB308', weight: 1 },
      { id: '4', text: 'Option 4', color: '#22C55E', weight: 1 },
      { id: '5', text: 'Option 5', color: '#14B8A6', weight: 1 },
      { id: '6', text: 'Option 6', color: '#3B82F6', weight: 1 },
    ]
  },

  // Fun Dares To Do
  {
    id: 'fun-dares-to-do',
    name: 'Fun Dares To Do',
    description: "Dare to have fun! Spin the Fun Dares To Do Wheel for silly, bold, and creative challenges break the ice, spice up parties, or create unforgettable memories.",
    category: 'Game & Fun Wheels',
    segments: [
      { id: '1', text: 'Option 1', color: '#EF4444', weight: 1 },
      { id: '2', text: 'Option 2', color: '#F97316', weight: 1 },
      { id: '3', text: 'Option 3', color: '#EAB308', weight: 1 },
      { id: '4', text: 'Option 4', color: '#22C55E', weight: 1 },
      { id: '5', text: 'Option 5', color: '#14B8A6', weight: 1 },
      { id: '6', text: 'Option 6', color: '#3B82F6', weight: 1 },
    ]
  },

  // Gender Randomizer
  {
    id: 'gender-randomizer',
    name: 'Gender Randomizer Wheel',
    description: "Mix things up! Spin the Gender Randomizer Wheel for games, stories, or character creation assign random genders and add variety to your creative projects.",
    category: 'Custom Wheels',
    segments: [
      { id: '1', text: 'Option 1', color: '#EF4444', weight: 1 },
      { id: '2', text: 'Option 2', color: '#F97316', weight: 1 },
      { id: '3', text: 'Option 3', color: '#EAB308', weight: 1 },
      { id: '4', text: 'Option 4', color: '#22C55E', weight: 1 },
      { id: '5', text: 'Option 5', color: '#14B8A6', weight: 1 },
      { id: '6', text: 'Option 6', color: '#3B82F6', weight: 1 },
    ]
  },

  // Genshin Impact Characters
  {
    id: 'genshin-impact-characters',
    name: 'Genshin Impact Characters',
    description: "Meet your next favorite! Spin the Genshin Impact Characters Wheel for a variety of heroes pick a main, drawing prompt, or cosplay idea.",
    category: 'Gaming Wheels',
    segments: [
      { id: '1', text: 'Option 1', color: '#EF4444', weight: 1 },
      { id: '2', text: 'Option 2', color: '#F97316', weight: 1 },
      { id: '3', text: 'Option 3', color: '#EAB308', weight: 1 },
      { id: '4', text: 'Option 4', color: '#22C55E', weight: 1 },
      { id: '5', text: 'Option 5', color: '#14B8A6', weight: 1 },
      { id: '6', text: 'Option 6', color: '#3B82F6', weight: 1 },
      { id: '7', text: 'Option 7', color: '#6366F1', weight: 1 },
      { id: '8', text: 'Option 8', color: '#8B5CF6', weight: 1 },
      { id: '9', text: 'Option 9', color: '#EC4899', weight: 1 },
      { id: '10', text: 'Option 10', color: '#F59E0B', weight: 1 },
      { id: '11', text: 'Option 11', color: '#10B981', weight: 1 },
      { id: '12', text: 'Option 12', color: '#06B6D4', weight: 1 },
    ]
  },

  // Hairstyles
  {
    id: 'hairstyles-wheel',
    name: 'Hairstyles Wheel',
    description: "Find your next hairstyle! Spin the Hairstyles Wheel for trendy, classic, and creative looks get inspired for your next cut, drawing, or character design.",
    category: 'Custom Wheels',
    segments: [
      { id: '1', text: 'Option 1', color: '#EF4444', weight: 1 },
      { id: '2', text: 'Option 2', color: '#F97316', weight: 1 },
      { id: '3', text: 'Option 3', color: '#EAB308', weight: 1 },
      { id: '4', text: 'Option 4', color: '#22C55E', weight: 1 },
      { id: '5', text: 'Option 5', color: '#14B8A6', weight: 1 },
      { id: '6', text: 'Option 6', color: '#3B82F6', weight: 1 },
    ]
  },

  // Heads Or Tails Flip A Coin
  {
    id: 'heads-or-tails-flip-a-coin',
    name: 'Heads Or Tails Flip A Coin',
    description: "Settle any debate! Spin the Heads Or Tails Flip A Coin Wheel for a digital coin toss—make quick decisions, play games, or settle friendly bets instantly.",
    category: 'Decision Wheels',
    segments: [
      { id: '1', text: 'Heads', color: '#EF4444', weight: 1 },
      { id: '2', text: 'Tails', color: '#F97316', weight: 1 },
    ]
  },

  // Height For Characters
  {
    id: 'height-for-characters',
    name: 'Height For Characters Wheel',
    description: "Need a random height for your character? Spin the Height For Characters Wheel ideal for writers, artists, and gamers to generate heights for stories or games.",
    category: 'Custom Wheels',
    segments: [
      { id: '1', text: 'Option 1', color: '#EF4444', weight: 1 },
      { id: '2', text: 'Option 2', color: '#F97316', weight: 1 },
      { id: '3', text: 'Option 3', color: '#EAB308', weight: 1 },
      { id: '4', text: 'Option 4', color: '#22C55E', weight: 1 },
      { id: '5', text: 'Option 5', color: '#14B8A6', weight: 1 },
      { id: '6', text: 'Option 6', color: '#3B82F6', weight: 1 },
    ]
  },

  // Help
  {
    id: 'help-wheel',
    name: 'Help Wheel',
    description: "Need assistance? Spin the Help Wheel for quick tips, guidance, and answers to common questions find solutions and make the most of your experience.",
    category: 'Custom Wheels',
    segments: [
      { id: '1', text: 'Option 1', color: '#EF4444', weight: 1 },
      { id: '2', text: 'Option 2', color: '#F97316', weight: 1 },
      { id: '3', text: 'Option 3', color: '#EAB308', weight: 1 },
      { id: '4', text: 'Option 4', color: '#22C55E', weight: 1 },
      { id: '5', text: 'Option 5', color: '#14B8A6', weight: 1 },
      { id: '6', text: 'Option 6', color: '#3B82F6', weight: 1 },
    ]
  },

  // Jobs
  {
    id: 'jobs-wheel',
    name: 'Jobs Wheel',
    description: "Explore career options! Spin the Jobs Wheel for job seekers, students, or anyone curious about professions discover new roles and get inspired for your next move.",
    category: 'Custom Wheels',
    segments: [
      { id: '1', text: 'Option 1', color: '#EF4444', weight: 1 },
      { id: '2', text: 'Option 2', color: '#F97316', weight: 1 },
      { id: '3', text: 'Option 3', color: '#EAB308', weight: 1 },
      { id: '4', text: 'Option 4', color: '#22C55E', weight: 1 },
      { id: '5', text: 'Option 5', color: '#14B8A6', weight: 1 },
      { id: '6', text: 'Option 6', color: '#3B82F6', weight: 1 },
    ]
  },

  // Jojo Stand Wheel Part 38
  {
    id: 'jojo-stand-wheel-part-38',
    name: 'Jojo Stand Wheel Part 38',
    description: "Unleash your Stand! Spin the Jojo Stand Wheel Part 38 for unique Stand abilities perfect for JoJo's Bizarre Adventure fans, games, or cosplay.",
    category: 'Entertainment Wheels',
    segments: [
      { id: '1', text: 'Option 1', color: '#EF4444', weight: 1 },
      { id: '2', text: 'Option 2', color: '#F97316', weight: 1 },
      { id: '3', text: 'Option 3', color: '#EAB308', weight: 1 },
      { id: '4', text: 'Option 4', color: '#22C55E', weight: 1 },
      { id: '5', text: 'Option 5', color: '#14B8A6', weight: 1 },
      { id: '6', text: 'Option 6', color: '#3B82F6', weight: 1 },
    ]
  },

  // Kinds Of Aesthetic
  {
    id: 'kinds-of-aesthetic',
    name: 'Kinds Of Aesthetic',
    description: "Find your vibe! Spin the Kinds Of Aesthetic Wheel for popular and niche aesthetics—great for artists, writers, and trendsetters seeking inspiration.",
    category: 'Aesthetic Wheels',
    segments: [
      { id: '1', text: 'Option 1', color: '#EF4444', weight: 1 },
      { id: '2', text: 'Option 2', color: '#F97316', weight: 1 },
      { id: '3', text: 'Option 3', color: '#EAB308', weight: 1 },
      { id: '4', text: 'Option 4', color: '#22C55E', weight: 1 },
      { id: '5', text: 'Option 5', color: '#14B8A6', weight: 1 },
      { id: '6', text: 'Option 6', color: '#3B82F6', weight: 1 },
    ]
  },

  // List Of Dares And Truths To Do With Your Friends
  {
    id: 'list-of-dares-and-truths-to-do-with-your-friends',
    name: 'List Of Dares And Truths To Do With Your Friends',
    description: "Make your next hangout unforgettable! Spin the List Of Dares And Truths Wheel for fun, silly, and challenging prompts break the ice and create memories.",
    category: 'Party Wheels',
    segments: [
      { id: '1', text: 'Option 1', color: '#EF4444', weight: 1 },
      { id: '2', text: 'Option 2', color: '#F97316', weight: 1 },
      { id: '3', text: 'Option 3', color: '#EAB308', weight: 1 },
      { id: '4', text: 'Option 4', color: '#22C55E', weight: 1 },
      { id: '5', text: 'Option 5', color: '#14B8A6', weight: 1 },
      { id: '6', text: 'Option 6', color: '#3B82F6', weight: 1 },
    ]
  },

  // Lunch Options
  {
    id: 'lunch-options',
    name: 'Lunch Options Wheel',
    description: "What's for lunch? Spin the Lunch Options Wheel for a variety of tasty choices discover new meals, break your routine, and make lunchtime exciting.",
    category: 'Food & Meal Wheels',
    segments: [
      { id: '1', text: 'Option 1', color: '#EF4444', weight: 1 },
      { id: '2', text: 'Option 2', color: '#F97316', weight: 1 },
      { id: '3', text: 'Option 3', color: '#EAB308', weight: 1 },
      { id: '4', text: 'Option 4', color: '#22C55E', weight: 1 },
      { id: '5', text: 'Option 5', color: '#14B8A6', weight: 1 },
      { id: '6', text: 'Option 6', color: '#3B82F6', weight: 1 },
    ]
  },

  // Marvel Rivals Pick Your Character
  {
    id: 'marvel-rivals-pick-your-character',
    name: 'Marvel Rivals Pick Your Character',
    description: "Which Marvel hero or villain will you get? Spin the Marvel Rivals Pick Your Character Wheel perfect for fans, games, or cosplay.",
    category: 'Entertainment Wheels',
    segments: [
      { id: '1', text: 'Option 1', color: '#EF4444', weight: 1 },
      { id: '2', text: 'Option 2', color: '#F97316', weight: 1 },
      { id: '3', text: 'Option 3', color: '#EAB308', weight: 1 },
      { id: '4', text: 'Option 4', color: '#22C55E', weight: 1 },
      { id: '5', text: 'Option 5', color: '#14B8A6', weight: 1 },
      { id: '6', text: 'Option 6', color: '#3B82F6', weight: 1 },
    ]
  },

  // Mha Wheel
  {
    id: 'mha-wheel',
    name: 'Mha Wheel',
    description: "Enter the world of My Hero Academia! Spin the Mha Wheel for characters, quirks, and surprises find your next cosplay, drawing prompt, or favorite hero.",
    category: 'Entertainment Wheels',
    segments: [
      { id: '1', text: 'Option 1', color: '#EF4444', weight: 1 },
      { id: '2', text: 'Option 2', color: '#F97316', weight: 1 },
      { id: '3', text: 'Option 3', color: '#EAB308', weight: 1 },
      { id: '4', text: 'Option 4', color: '#22C55E', weight: 1 },
      { id: '5', text: 'Option 5', color: '#14B8A6', weight: 1 },
      { id: '6', text: 'Option 6', color: '#3B82F6', weight: 1 },
    ]
  },

  // Mlb Teams
  {
    id: 'mlb-teams',
    name: 'Mlb Teams Wheel',
    description: "Root for your team! Spin the Mlb Teams Wheel for baseball fans, fantasy leagues, or trivia nights—pick a team, learn something new, or add excitement to game day.",
    category: 'Sports Wheels',
    segments: [
      { id: '1', text: 'Yankees', color: '#EF4444', weight: 1 },
      { id: '2', text: 'Red Sox', color: '#F97316', weight: 1 },
      { id: '3', text: 'Dodgers', color: '#EAB308', weight: 1 },
      { id: '4', text: 'Cubs', color: '#22C55E', weight: 1 },
      { id: '5', text: 'Giants', color: '#14B8A6', weight: 1 },
      { id: '6', text: 'Cardinals', color: '#3B82F6', weight: 1 },
      { id: '7', text: 'Braves', color: '#6366F1', weight: 1 },
      { id: '8', text: 'Astros', color: '#8B5CF6', weight: 1 },
    ]
  },

  // Music Genres 2Opb
  {
    id: 'music-genres-2Opb',
    name: 'Music Genres 2Opb',
    description: "Discover new sounds! Spin the Music Genres 2Opb Wheel to explore genres, find your next favorite, or add variety to your playlists and parties.",
    category: 'Entertainment Wheels',
    segments: [
      { id: '1', text: 'Option 1', color: '#EF4444', weight: 1 },
      { id: '2', text: 'Option 2', color: '#F97316', weight: 1 },
      { id: '3', text: 'Option 3', color: '#EAB308', weight: 1 },
      { id: '4', text: 'Option 4', color: '#22C55E', weight: 1 },
      { id: '5', text: 'Option 5', color: '#14B8A6', weight: 1 },
      { id: '6', text: 'Option 6', color: '#3B82F6', weight: 1 },
    ]
  },

  // Music Genres 48S8
  {
    id: 'music-genres-48S8',
    name: 'Music Genres 48S8',
    description: "Expand your musical horizons! Spin the Music Genres 48S8 Wheel for diverse styles and rhythms inspire your next playlist or set the mood for any occasion.",
    category: 'Entertainment Wheels',
    segments: [
      { id: '1', text: 'Option 1', color: '#EF4444', weight: 1 },
      { id: '2', text: 'Option 2', color: '#F97316', weight: 1 },
      { id: '3', text: 'Option 3', color: '#EAB308', weight: 1 },
      { id: '4', text: 'Option 4', color: '#22C55E', weight: 1 },
      { id: '5', text: 'Option 5', color: '#14B8A6', weight: 1 },
      { id: '6', text: 'Option 6', color: '#3B82F6', weight: 1 },
    ]
  },

  // Nba Teams
  {
    id: 'nba-teams',
    name: 'Nba Teams',
    description: "Which NBA team will you get? Spin the Nba Teams Wheel for basketball fans, fantasy drafts, or friendly competitions pick a team, learn fun facts, or add excitement.",
    category: 'Sports Wheels',
    segments: [
      { id: '1', text: 'Lakers', color: '#EF4444', weight: 1 },
      { id: '2', text: 'Celtics', color: '#F97316', weight: 1 },
      { id: '3', text: 'Bulls', color: '#EAB308', weight: 1 },
      { id: '4', text: 'Warriors', color: '#22C55E', weight: 1 },
      { id: '5', text: 'Heat', color: '#14B8A6', weight: 1 },
      { id: '6', text: 'Knicks', color: '#3B82F6', weight: 1 },
      { id: '7', text: 'Mavericks', color: '#6366F1', weight: 1 },
      { id: '8', text: 'Nets', color: '#8B5CF6', weight: 1 },
    ]
  },

  // Ncaa Division I Fbs Teams
  {
    id: 'ncaa-division-i-fbs-teams',
    name: 'Ncaa Division I Fbs Teams',
    description: "Ready for college football action? Spin the NCAA Division I FBS Teams Wheel to pick from top college teams find your next favorite or add excitement to game day.",
    category: 'Sports Wheels',
    segments: [
      { id: '1', text: 'Option 1', color: '#EF4444', weight: 1 },
      { id: '2', text: 'Option 2', color: '#F97316', weight: 1 },
      { id: '3', text: 'Option 3', color: '#EAB308', weight: 1 },
      { id: '4', text: 'Option 4', color: '#22C55E', weight: 1 },
      { id: '5', text: 'Option 5', color: '#14B8A6', weight: 1 },
      { id: '6', text: 'Option 6', color: '#3B82F6', weight: 1 },
    ]
  },

  // Nfl All Positions
  {
    id: 'nfl-all-positions',
    name: 'Nfl All Positions',
    description: "Explore every position on the field! Spin the NFL All Positions Wheel for football fans, fantasy leagues, or learning discover roles or draft players.",
    category: 'Sports Wheels',
    segments: [
      { id: '1', text: 'Option 1', color: '#EF4444', weight: 1 },
      { id: '2', text: 'Option 2', color: '#F97316', weight: 1 },
      { id: '3', text: 'Option 3', color: '#EAB308', weight: 1 },
      { id: '4', text: 'Option 4', color: '#22C55E', weight: 1 },
      { id: '5', text: 'Option 5', color: '#14B8A6', weight: 1 },
      { id: '6', text: 'Option 6', color: '#3B82F6', weight: 1 },
    ]
  },
  // Nfl Teams 2ISA
  {
    id: 'nfl-teams-2ISA',
    name: 'Nfl Teams 2ISA',
    description: "Can't pick a team? Spin the NFL Teams 2ISA Wheel to choose from all the top football teams perfect for competitions, fantasy leagues, or game night.",
    category: 'Sports Wheels',
    segments: [
      { id: '1', text: 'Patriots', color: '#EF4444', weight: 1 },
      { id: '2', text: 'Cowboys', color: '#F97316', weight: 1 },
      { id: '3', text: 'Packers', color: '#EAB308', weight: 1 },
      { id: '4', text: 'Steelers', color: '#22C55E', weight: 1 },
      { id: '5', text: '49ers', color: '#14B8A6', weight: 1 },
      { id: '6', text: 'Giants', color: '#3B82F6', weight: 1 },
      { id: '7', text: 'Bears', color: '#6366F1', weight: 1 },
      { id: '8', text: 'Broncos', color: '#8B5CF6', weight: 1 },
    ]
  },

  // Nfl Teams 324T5
  {
    id: 'nfl-teams-324T5',
    name: 'Nfl Teams 324T5',
    description: "Find your football allegiance! Spin the NFL Teams 324T5 Wheel for fans, parties, or drafts discover a new team or make unbiased decisions for your event.",
    category: 'Sports Wheels',
    segments: [
      { id: '1', text: 'Patriots', color: '#EF4444', weight: 1 },
      { id: '2', text: 'Cowboys', color: '#F97316', weight: 1 },
      { id: '3', text: 'Packers', color: '#EAB308', weight: 1 },
      { id: '4', text: 'Steelers', color: '#22C55E', weight: 1 },
      { id: '5', text: '49ers', color: '#14B8A6', weight: 1 },
      { id: '6', text: 'Giants', color: '#3B82F6', weight: 1 },
      { id: '7', text: 'Bears', color: '#6366F1', weight: 1 },
      { id: '8', text: 'Broncos', color: '#8B5CF6', weight: 1 },
    ]
  },

  // Nfl Teams 4YRH
  {
    id: 'nfl-teams-4YRH',
    name: 'Nfl Teams 4YRH',
    description: "Join the excitement of the NFL! Spin the NFL Teams 4YRH Wheel to pick teams for games, bets, or fantasy leagues add suspense and variety to your football experience.",
    category: 'Sports Wheels',
    segments: [
      { id: '1', text: 'Patriots', color: '#EF4444', weight: 1 },
      { id: '2', text: 'Cowboys', color: '#F97316', weight: 1 },
      { id: '3', text: 'Packers', color: '#EAB308', weight: 1 },
      { id: '4', text: 'Steelers', color: '#22C55E', weight: 1 },
      { id: '5', text: '49ers', color: '#14B8A6', weight: 1 },
      { id: '6', text: 'Giants', color: '#3B82F6', weight: 1 },
      { id: '7', text: 'Bears', color: '#6366F1', weight: 1 },
      { id: '8', text: 'Broncos', color: '#8B5CF6', weight: 1 },
    ]
  },

  // Numberblocks 0 To Absolute Infinity
  {
    id: 'numberblocks-0-to-absolute-infinity',
    name: 'Numberblocks 0 To Absolute Infinity',
    description: "Learn and play with numbers! Perfect for kids, teachers, and parents. Explore numbers, inspire math games, or make learning fun and interactive.",
    category: 'Color & Number Wheels',
    segments: [
      { id: '1', text: 'Option 1', color: '#EF4444', weight: 1 },
      { id: '2', text: 'Option 2', color: '#F97316', weight: 1 },
      { id: '3', text: 'Option 3', color: '#EAB308', weight: 1 },
      { id: '4', text: 'Option 4', color: '#22C55E', weight: 1 },
      { id: '5', text: 'Option 5', color: '#14B8A6', weight: 1 },
      { id: '6', text: 'Option 6', color: '#3B82F6', weight: 1 },
    ]
  },

  // Numbers 1  100
  {
    id: 'numbers-1-100',
    name: 'Numbers 1 100',
    description: "Let chance pick your number! Spin the Numbers 1 100 Wheel for raffles, games, or classroom activities generate numbers and add excitement to any event.",
    category: 'Color & Number Wheels',
    segments: [
      { id: '1', text: '1', color: '#EF4444', weight: 1 },
      { id: '2', text: '2', color: '#F97316', weight: 1 },
      { id: '3', text: '3', color: '#EAB308', weight: 1 },
      { id: '4', text: '4', color: '#22C55E', weight: 1 },
      { id: '5', text: '5', color: '#14B8A6', weight: 1 },
      { id: '6', text: '6', color: '#3B82F6', weight: 1 },
      { id: '7', text: '7', color: '#6366F1', weight: 1 },
      { id: '8', text: '8', color: '#8B5CF6', weight: 1 },
      { id: '9', text: '9', color: '#EC4899', weight: 1 },
      { id: '10', text: '10', color: '#F59E0B', weight: 1 },
    ]
  },

  // Numbers 1 Through 150
  {
    id: 'numbers-1-through-150',
    name: 'Numbers 1 Through 150',
    description: "Pick a number at random! Spin the Numbers 1 Through 150 Wheel for games, learning, or decision making—add fun and unpredictability to your activities.",
    category: 'Color & Number Wheels',
    segments: [
      { id: '1', text: '1', color: '#EF4444', weight: 1 },
      { id: '2', text: '2', color: '#F97316', weight: 1 },
      { id: '3', text: '3', color: '#EAB308', weight: 1 },
      { id: '4', text: '4', color: '#22C55E', weight: 1 },
      { id: '5', text: '5', color: '#14B8A6', weight: 1 },
      { id: '6', text: '6', color: '#3B82F6', weight: 1 },
      { id: '7', text: '7', color: '#6366F1', weight: 1 },
      { id: '8', text: '8', color: '#8B5CF6', weight: 1 },
      { id: '9', text: '9', color: '#EC4899', weight: 1 },
      { id: '10', text: '10', color: '#F59E0B', weight: 1 },
    ]
  },

  // Personality 
  {
    id: 'personality-wheel',
    name: 'Personality Wheel',
    description: "Discover your traits! Spin the Personality Wheel for fun and insightful prompts learn about yourself, inspire stories, or add a twist to games.",
    category: 'Custom Wheels',
    segments: [
      { id: '1', text: 'Option 1', color: '#EF4444', weight: 1 },
      { id: '2', text: 'Option 2', color: '#F97316', weight: 1 },
      { id: '3', text: 'Option 3', color: '#EAB308', weight: 1 },
      { id: '4', text: 'Option 4', color: '#22C55E', weight: 1 },
      { id: '5', text: 'Option 5', color: '#14B8A6', weight: 1 },
      { id: '6', text: 'Option 6', color: '#3B82F6', weight: 1 },
    ]
  },

  // Pokemon Games
  {
    id: 'pokemon-games',
    name: 'Pokemon Games Wheel',
    description: "Which Pokémon adventure will you choose? Spin the Pokemon Games Wheel for fans or gamers pick your next game or inspire your journey.",
    category: 'Gaming Wheels',
    segments: [
      { id: '1', text: 'Fire', color: '#EF4444', weight: 1 },
      { id: '2', text: 'Water', color: '#F97316', weight: 1 },
      { id: '3', text: 'Grass', color: '#EAB308', weight: 1 },
      { id: '4', text: 'Electric', color: '#22C55E', weight: 1 },
      { id: '5', text: 'Psychic', color: '#14B8A6', weight: 1 },
      { id: '6', text: 'Fighting', color: '#3B82F6', weight: 1 },
      { id: '7', text: 'Flying', color: '#6366F1', weight: 1 },
      { id: '8', text: 'Poison', color: '#8B5CF6', weight: 1 },
      { id: '9', text: 'Ground', color: '#EC4899', weight: 1 },
      { id: '10', text: 'Rock', color: '#F59E0B', weight: 1 },
      { id: '11', text: 'Ice', color: '#10B981', weight: 1 },
      { id: '12', text: 'Bug', color: '#06B6D4', weight: 1 },
    ]
  },

  // Pokmon Types
  {
    id: 'pokmon-types',
    name: 'Pokmon Types Wheel',
    description: 'Discover Pokémon types! Spin the Pokmon Types Wheel for random selection great for games, team building, or creative inspiration.',
    category: 'Custom Wheels',
    segments: [
      { id: '1', text: 'Option 1', color: '#EF4444', weight: 1 },
      { id: '2', text: 'Option 2', color: '#F97316', weight: 1 },
      { id: '3', text: 'Option 3', color: '#EAB308', weight: 1 },
      { id: '4', text: 'Option 4', color: '#22C55E', weight: 1 },
      { id: '5', text: 'Option 5', color: '#14B8A6', weight: 1 },
      { id: '6', text: 'Option 6', color: '#3B82F6', weight: 1 },
    ]
  },

  // Punishment Wheel
  {
    id: 'punishment-wheel',
    name: 'Punishment Wheel',
    description: "Add suspense to your games! Spin the Punishment Wheel for creative dares and challenges keep everyone on their toes and make every round unforgettable.",
    category: 'Custom Wheels',
    segments: [
      { id: '1', text: 'Option 1', color: '#EF4444', weight: 1 },
      { id: '2', text: 'Option 2', color: '#F97316', weight: 1 },
      { id: '3', text: 'Option 3', color: '#EAB308', weight: 1 },
      { id: '4', text: 'Option 4', color: '#22C55E', weight: 1 },
      { id: '5', text: 'Option 5', color: '#14B8A6', weight: 1 },
      { id: '6', text: 'Option 6', color: '#3B82F6', weight: 1 },
    ]
  },

  // Rainbow 3xl3
  {
    id: 'rainbow-3xl3',
    name: 'Rainbow 3xl3',
    description: "Experience the colors of the rainbow! Spin to land on a random color great for art, design, or learning about colors in a fun way.",
    category: 'Color & Number Wheels',
    segments: [
      { id: '1', text: 'Option 1', color: '#EF4444', weight: 1 },
      { id: '2', text: 'Option 2', color: '#F97316', weight: 1 },
      { id: '3', text: 'Option 3', color: '#EAB308', weight: 1 },
      { id: '4', text: 'Option 4', color: '#22C55E', weight: 1 },
      { id: '5', text: 'Option 5', color: '#14B8A6', weight: 1 },
      { id: '6', text: 'Option 6', color: '#3B82F6', weight: 1 },
    ]
  },

  // Rainbow 55RhC
  {
    id: 'rainbow-55RhC',
    name: 'Rainbow 55RhC',
    description: "Experience the colors of the rainbow! Spin to land on a random color great for art, design, or learning about colors in a fun way.",
    category: 'Color & Number Wheels',
    segments: [
      { id: '1', text: 'Option 1', color: '#EF4444', weight: 1 },
      { id: '2', text: 'Option 2', color: '#F97316', weight: 1 },
      { id: '3', text: 'Option 3', color: '#EAB308', weight: 1 },
      { id: '4', text: 'Option 4', color: '#22C55E', weight: 1 },
      { id: '5', text: 'Option 5', color: '#14B8A6', weight: 1 },
      { id: '6', text: 'Option 6', color: '#3B82F6', weight: 1 },
    ]
  },

  // Random Color 20vU
  {
    id: 'random-color-20vU',
    name: 'Random Color 20vU',
    description: "Need a color? Spin for a random shade perfect for artists, designers, or anyone seeking creative inspiration and color variety.",
    category: 'Color & Number Wheels',
    segments: [
      { id: '1', text: 'Option 1', color: '#EF4444', weight: 1 },
      { id: '2', text: 'Option 2', color: '#F97316', weight: 1 },
      { id: '3', text: 'Option 3', color: '#EAB308', weight: 1 },
      { id: '4', text: 'Option 4', color: '#22C55E', weight: 1 },
      { id: '5', text: 'Option 5', color: '#14B8A6', weight: 1 },
      { id: '6', text: 'Option 6', color: '#3B82F6', weight: 1 },
    ]
  },

  // Random Emoji 2CO4
  {
    id: 'random-emoji-2CO4',
    name: 'Random Emoji 2CO4',
    description: "Spin to get a random emoji! Great for games, social media, or creative prompts. Add fun and surprise to your messages and projects.",
    category: 'Color & Number Wheels',
    segments: [
      { id: '1', text: 'Option 1', color: '#EF4444', weight: 1 },
      { id: '2', text: 'Option 2', color: '#F97316', weight: 1 },
      { id: '3', text: 'Option 3', color: '#EAB308', weight: 1 },
      { id: '4', text: 'Option 4', color: '#22C55E', weight: 1 },
      { id: '5', text: 'Option 5', color: '#14B8A6', weight: 1 },
      { id: '6', text: 'Option 6', color: '#3B82F6', weight: 1 },
    ]
  },

  // Random Nfl  Players
  {
    id: 'random-nfl-players',
    name: 'Random Nfl Players',
    description: "Pick a random NFL player! Spin for fantasy drafts, games, or trivia. Discover new players and add excitement to your football experience.",
    category: 'Sports Wheels',
    segments: [
      { id: '1', text: 'Option 1', color: '#EF4444', weight: 1 },
      { id: '2', text: 'Option 2', color: '#F97316', weight: 1 },
      { id: '3', text: 'Option 3', color: '#EAB308', weight: 1 },
      { id: '4', text: 'Option 4', color: '#22C55E', weight: 1 },
      { id: '5', text: 'Option 5', color: '#14B8A6', weight: 1 },
      { id: '6', text: 'Option 6', color: '#3B82F6', weight: 1 },
    ]
  },

  // Random Pokemon Types
  {
    id: 'random-pokemon-types',
    name: 'Random Pokemon Types',
    description: "Spin to get a random Pokémon type! Ideal for team challenges, games, or creative inspiration. Perfect for Pokémon fans and trainers.",
    category: 'Gaming Wheels',
    segments: [
      { id: '1', text: 'Fire', color: '#EF4444', weight: 1 },
      { id: '2', text: 'Water', color: '#F97316', weight: 1 },
      { id: '3', text: 'Grass', color: '#EAB308', weight: 1 },
      { id: '4', text: 'Electric', color: '#22C55E', weight: 1 },
      { id: '5', text: 'Psychic', color: '#14B8A6', weight: 1 },
      { id: '6', text: 'Fighting', color: '#3B82F6', weight: 1 },
      { id: '7', text: 'Flying', color: '#6366F1', weight: 1 },
      { id: '8', text: 'Poison', color: '#8B5CF6', weight: 1 },
      { id: '9', text: 'Ground', color: '#EC4899', weight: 1 },
      { id: '10', text: 'Rock', color: '#F59E0B', weight: 1 },
      { id: '11', text: 'Ice', color: '#10B981', weight: 1 },
      { id: '12', text: 'Bug', color: '#06B6D4', weight: 1 },
    ]
  },

  // Random Themes 2BbZ
  {
    id: 'random-themes-2BbZ',
    name: 'Random Themes 2BbZ',
    description: "Find your next theme! Spin for creative prompts for parties, art, writing, or events. Get inspired and make every project unique.",
    category: 'Color & Number Wheels',
    segments: [
      { id: '1', text: 'Option 1', color: '#EF4444', weight: 1 },
      { id: '2', text: 'Option 2', color: '#F97316', weight: 1 },
      { id: '3', text: 'Option 3', color: '#EAB308', weight: 1 },
      { id: '4', text: 'Option 4', color: '#22C55E', weight: 1 },
      { id: '5', text: 'Option 5', color: '#14B8A6', weight: 1 },
      { id: '6', text: 'Option 6', color: '#3B82F6', weight: 1 },
    ]
  },

  // Restaurants
  {
    id: 'restaurants',
    name: 'Restaurants Wheel',
    description: "Can't decide where to eat? Spin for a random restaurant idea—perfect for group outings, date nights, or trying something new.",
    category: 'Food & Meal Wheels',
    segments: [
      { id: '1', text: 'Pizza', color: '#EF4444', weight: 1 },
      { id: '2', text: 'Burger', color: '#F97316', weight: 1 },
      { id: '3', text: 'Sushi', color: '#EAB308', weight: 1 },
      { id: '4', text: 'Tacos', color: '#22C55E', weight: 1 },
      { id: '5', text: 'Pasta', color: '#14B8A6', weight: 1 },
      { id: '6', text: 'Salad', color: '#3B82F6', weight: 1 },
    ]
  },

  // Roleplay Themes 2WYS
  {
    id: 'roleplay-themes-2WYS',
    name: 'Roleplay Themes 2WYS',
    description: "Discover fresh roleplay themes! Spin for creative scenarios for games, writing, or acting. Make every session unique and engaging.",
    category: 'Custom Wheels',
    segments: [
      { id: '1', text: 'Option 1', color: '#EF4444', weight: 1 },
      { id: '2', text: 'Option 2', color: '#F97316', weight: 1 },
      { id: '3', text: 'Option 3', color: '#EAB308', weight: 1 },
      { id: '4', text: 'Option 4', color: '#22C55E', weight: 1 },
      { id: '5', text: 'Option 5', color: '#14B8A6', weight: 1 },
      { id: '6', text: 'Option 6', color: '#3B82F6', weight: 1 },
    ]
  },

  // Sims 4 Wheel Of Drama
  {
    id: 'sims-4-wheel-of-drama',
    name: 'Sims 4 Wheel Of Drama',
    description: "Add drama to your Sims 4 game! Spin for random events, challenges, or story twists. Make every playthrough unpredictable and fun.",
    category: 'Custom Wheels',
    segments: [
      { id: '1', text: 'Option 1', color: '#EF4444', weight: 1 },
      { id: '2', text: 'Option 2', color: '#F97316', weight: 1 },
      { id: '3', text: 'Option 3', color: '#EAB308', weight: 1 },
      { id: '4', text: 'Option 4', color: '#22C55E', weight: 1 },
      { id: '5', text: 'Option 5', color: '#14B8A6', weight: 1 },
      { id: '6', text: 'Option 6', color: '#3B82F6', weight: 1 },
    ]
  },

  // Skin Color
  {
    id: 'skin-color',
    name: 'Skin Color Wheel',
    description: "Explore a spectrum of skin tones! Spin to select a random skin color great for artists, designers, or learning about diversity.",
    category: 'Color & Number Wheels',
    segments: [
      { id: '1', text: 'Option 1', color: '#EF4444', weight: 1 },
      { id: '2', text: 'Option 2', color: '#F97316', weight: 1 },
      { id: '3', text: 'Option 3', color: '#EAB308', weight: 1 },
      { id: '4', text: 'Option 4', color: '#22C55E', weight: 1 },
      { id: '5', text: 'Option 5', color: '#14B8A6', weight: 1 },
      { id: '6', text: 'Option 6', color: '#3B82F6', weight: 1 },
    ]
  },

  // Spin Of Arrows
  {
    id: 'spin-of-arrows',
    name: 'Spin Of Arrows',
    description: "Which direction will you go? Spin the Spin Of Arrows Wheel for games, decision making, or adding a twist to your activities. Let fate guide your next move.",
    category: 'Custom Wheels',
    segments: [
      { id: '1', text: 'Option 1', color: '#EF4444', weight: 1 },
      { id: '2', text: 'Option 2', color: '#F97316', weight: 1 },
      { id: '3', text: 'Option 3', color: '#EAB308', weight: 1 },
      { id: '4', text: 'Option 4', color: '#22C55E', weight: 1 },
      { id: '5', text: 'Option 5', color: '#14B8A6', weight: 1 },
      { id: '6', text: 'Option 6', color: '#3B82F6', weight: 1 },
    ]
  },

  // Steven Universe Characters
  {
    id: 'steven-universe-characters',
    name: 'Steven Universe Characters',
    description: "Meet the gems! Spin the Steven Universe Characters Wheel for your favorite characters from the show. Pick your next cosplay, drawing prompt, or favorite gem.",
    category: 'Gaming Wheels',
    segments: [
      { id: '1', text: 'Option 1', color: '#EF4444', weight: 1 },
      { id: '2', text: 'Option 2', color: '#F97316', weight: 1 },
      { id: '3', text: 'Option 3', color: '#EAB308', weight: 1 },
      { id: '4', text: 'Option 4', color: '#22C55E', weight: 1 },
      { id: '5', text: 'Option 5', color: '#14B8A6', weight: 1 },
      { id: '6', text: 'Option 6', color: '#3B82F6', weight: 1 },
    ]
  },

  // Superheroes
  {
    id: 'superheroes-wheel',
    name: 'Superheroes Wheel',
    description: "Discover your super alter ego! Spin the Superheroes Wheel for legendary and original heroes. Find your next cosplay, story inspiration, or just for fun.",
    category: 'Custom Wheels',
    segments: [
      { id: '1', text: 'Option 1', color: '#EF4444', weight: 1 },
      { id: '2', text: 'Option 2', color: '#F97316', weight: 1 },
      { id: '3', text: 'Option 3', color: '#EAB308', weight: 1 },
      { id: '4', text: 'Option 4', color: '#22C55E', weight: 1 },
      { id: '5', text: 'Option 5', color: '#14B8A6', weight: 1 },
      { id: '6', text: 'Option 6', color: '#3B82F6', weight: 1 },
    ]
  },

  // The Wheel Of Doom 3MhQ
  {
    id: 'the-wheel-of-doom-3MhQ',
    name: 'The Wheel Of Doom 3MhQ',
    description: "Embrace the unexpected! Spin the Wheel Of Doom 3MhQ for wild outcomes and daring challenges. Add suspense, laughter, or a twist to your next game or event.",
    category: 'Custom Wheels',
    segments: [
      { id: '1', text: 'Option 1', color: '#EF4444', weight: 1 },
      { id: '2', text: 'Option 2', color: '#F97316', weight: 1 },
      { id: '3', text: 'Option 3', color: '#EAB308', weight: 1 },
      { id: '4', text: 'Option 4', color: '#22C55E', weight: 1 },
      { id: '5', text: 'Option 5', color: '#14B8A6', weight: 1 },
      { id: '6', text: 'Option 6', color: '#3B82F6', weight: 1 },
    ]
  },

  // The Yes Or No Wheel
  {
    id: 'the-yes-or-no-wheel',
    name: 'The Yes Or No Wheel',
    description: "Can't decide? Spin the Yes Or No Wheel for instant answers to any question. Settle debates, make choices, or add a playful touch to your day.",
    category: 'Decision Wheels',
    segments: [
      { id: '1', text: 'Yes', color: '#EF4444', weight: 1 },
      { id: '2', text: 'No', color: '#F97316', weight: 1 },
      { id: '3', text: 'No', color: '#EAB308', weight: 1 },
      { id: '4', text: 'No', color: '#22C55E', weight: 1 },
      { id: '5', text: 'No', color: '#14B8A6', weight: 1 },
      { id: '6', text: 'No', color: '#3B82F6', weight: 1 },
    ]
  },

  // Themes
  {
    id: 'themes-wheel',
    name: 'Themes Wheel',
    description: "Explore endless possibilities! Spin the Themes Wheel for creative prompts for art, writing, parties, and more. Inspire your next project or event.",
    category: 'Custom Wheels',
    segments: [
      { id: '1', text: 'Option 1', color: '#EF4444', weight: 1 },
      { id: '2', text: 'Option 2', color: '#F97316', weight: 1 },
      { id: '3', text: 'Option 3', color: '#EAB308', weight: 1 },
      { id: '4', text: 'Option 4', color: '#22C55E', weight: 1 },
      { id: '5', text: 'Option 5', color: '#14B8A6', weight: 1 },
      { id: '6', text: 'Option 6', color: '#3B82F6', weight: 1 },
    ]
  },

  // Themes 7LLU
  {
    id: 'themes-7LLU',
    name: 'Themes 7LLU',
    description: "Get inspired with new themes! Spin for creative ideas for art, writing, parties, or projects. Make every creation stand out.",
    category: 'Custom Wheels',
    segments: [
      { id: '1', text: 'Option 1', color: '#EF4444', weight: 1 },
      { id: '2', text: 'Option 2', color: '#F97316', weight: 1 },
      { id: '3', text: 'Option 3', color: '#EAB308', weight: 1 },
      { id: '4', text: 'Option 4', color: '#22C55E', weight: 1 },
      { id: '5', text: 'Option 5', color: '#14B8A6', weight: 1 },
      { id: '6', text: 'Option 6', color: '#3B82F6', weight: 1 },
    ]
  },

  // Truth Or Dare 48gM
  {
    id: 'truth-or-dare-48gM',
    name: 'Truth Or Dare 48gM',
    description: "Liven up your party! Spin for bold truths or daring challenges. Perfect for friends, gatherings, or breaking the ice in a fun way.",
    category: 'Game & Fun Wheels',
    segments: [
      { id: '1', text: 'Option 1', color: '#EF4444', weight: 1 },
      { id: '2', text: 'Option 2', color: '#F97316', weight: 1 },
      { id: '3', text: 'Option 3', color: '#EAB308', weight: 1 },
      { id: '4', text: 'Option 4', color: '#22C55E', weight: 1 },
      { id: '5', text: 'Option 5', color: '#14B8A6', weight: 1 },
      { id: '6', text: 'Option 6', color: '#3B82F6', weight: 1 },
    ]
  },

  // Ultimate Character Wheel 3f3w
  {
    id: 'ultimate-character-wheel-3f3w',
    name: 'Ultimate Character Wheel 3f3w',
    description: "Discover your next character! Spin for unique character ideas for stories, games, or roleplay. Spark creativity and imagination.",
    category: 'Gaming Wheels',
    segments: [
      { id: '1', text: 'Option 1', color: '#EF4444', weight: 1 },
      { id: '2', text: 'Option 2', color: '#F97316', weight: 1 },
      { id: '3', text: 'Option 3', color: '#EAB308', weight: 1 },
      { id: '4', text: 'Option 4', color: '#22C55E', weight: 1 },
      { id: '5', text: 'Option 5', color: '#14B8A6', weight: 1 },
      { id: '6', text: 'Option 6', color: '#3B82F6', weight: 1 },
    ]
  },

  // Untitled Wheel 408RF
  {
    id: 'untitled-wheel-408RF',
    name: 'Untitled Wheel 408RF',
    description: "Spin for a surprise! This untitled wheel offers random options for any occasion perfect for games, decisions, or just for fun.",
    category: 'Custom Wheels',
    segments: [
      { id: '1', text: 'Option 1', color: '#EF4444', weight: 1 },
      { id: '2', text: 'Option 2', color: '#F97316', weight: 1 },
      { id: '3', text: 'Option 3', color: '#EAB308', weight: 1 },
      { id: '4', text: 'Option 4', color: '#22C55E', weight: 1 },
      { id: '5', text: 'Option 5', color: '#14B8A6', weight: 1 },
      { id: '6', text: 'Option 6', color: '#3B82F6', weight: 1 },
    ]
  },

  // Wheel Challenge
  {
    id: 'wheel-challenge',
    name: 'Wheel Challenge',
    description: "Take on a new challenge! Spin for daring tasks and fun ideas. Energize your group, push your limits, or spice up your next gathering.",
    category: 'Game & Fun Wheels',
    segments: [
      { id: '1', text: 'Option 1', color: '#EF4444', weight: 1 },
      { id: '2', text: 'Option 2', color: '#F97316', weight: 1 },
      { id: '3', text: 'Option 3', color: '#EAB308', weight: 1 },
      { id: '4', text: 'Option 4', color: '#22C55E', weight: 1 },
      { id: '5', text: 'Option 5', color: '#14B8A6', weight: 1 },
      { id: '6', text: 'Option 6', color: '#3B82F6', weight: 1 },
    ]
  },

  // Weight Class Wheel
  {
    id: 'weight-class-wheel',
    name: 'Weight Class Wheel',
    description: "Assign weight classes fairly! Spin for random divisions—ideal for sports, fitness, or games. Make competitions balanced and fun.",
    category: 'Custom Wheels',
    segments: [
      { id: '1', text: 'Option 1', color: '#EF4444', weight: 1 },
      { id: '2', text: 'Option 2', color: '#F97316', weight: 1 },
      { id: '3', text: 'Option 3', color: '#EAB308', weight: 1 },
      { id: '4', text: 'Option 4', color: '#22C55E', weight: 1 },
      { id: '5', text: 'Option 5', color: '#14B8A6', weight: 1 },
      { id: '6', text: 'Option 6', color: '#3B82F6', weight: 1 },
    ]
  },

  // What Animal Are You 100 Animals
  {
    id: 'what-animal-are-you-100-animals',
    name: 'What Animal Are You 100 Animals',
    description: "Which animal are you? Spin to discover your animal match from 100 options. Great for quizzes, parties, personality tests, or just for fun!",
    category: 'Custom Wheels',
    segments: [
      { id: '1', text: 'Option 1', color: '#EF4444', weight: 1 },
      { id: '2', text: 'Option 2', color: '#F97316', weight: 1 },
      { id: '3', text: 'Option 3', color: '#EAB308', weight: 1 },
      { id: '4', text: 'Option 4', color: '#22C55E', weight: 1 },
      { id: '5', text: 'Option 5', color: '#14B8A6', weight: 1 },
      { id: '6', text: 'Option 6', color: '#3B82F6', weight: 1 },
    ]
  },

  // What Food Should You Eat For Dinner
  {
    id: 'what-food-should-you-eat-for-dinner',
    name: 'What Food Should You Eat For Dinner',
    description: "Can't decide on dinner? Spin for meal ideas and break your routine. Perfect for families, roommates, or anyone wanting a tasty suggestion.",
    category: 'Food & Meal Wheels',
    segments: [
      { id: '1', text: 'Pizza', color: '#EF4444', weight: 1 },
      { id: '2', text: 'Burger', color: '#F97316', weight: 1 },
      { id: '3', text: 'Sushi', color: '#EAB308', weight: 1 },
      { id: '4', text: 'Tacos', color: '#22C55E', weight: 1 },
      { id: '5', text: 'Pasta', color: '#14B8A6', weight: 1 },
      { id: '6', text: 'Salad', color: '#3B82F6', weight: 1 },
    ]
  },

  // What To Draw 2joe
  {
    id: 'what-to-draw-2joe',
    name: 'What To Draw 2joe',
    description: "Need drawing inspiration? Spin for creative prompts and overcome artist's block. Start your next masterpiece with a fun idea.",
    category: 'Custom Wheels',
    segments: [
      { id: '1', text: 'Option 1', color: '#EF4444', weight: 1 },
      { id: '2', text: 'Option 2', color: '#F97316', weight: 1 },
      { id: '3', text: 'Option 3', color: '#EAB308', weight: 1 },
      { id: '4', text: 'Option 4', color: '#22C55E', weight: 1 },
      { id: '5', text: 'Option 5', color: '#14B8A6', weight: 1 },
      { id: '6', text: 'Option 6', color: '#3B82F6', weight: 1 },
    ]
  },

  // Whats The Best Birthday
  {
    id: 'whats-the-best-birthday',
    name: 'Whats The Best Birthday',
    description: "Find the best birthday idea! Spin for unique ways to celebrate, party themes, or gift ideas. Make every birthday unforgettable.",
    category: 'Custom Wheels',
    segments: [
      { id: '1', text: 'Option 1', color: '#EF4444', weight: 1 },
      { id: '2', text: 'Option 2', color: '#F97316', weight: 1 },
      { id: '3', text: 'Option 3', color: '#EAB308', weight: 1 },
      { id: '4', text: 'Option 4', color: '#22C55E', weight: 1 },
      { id: '5', text: 'Option 5', color: '#14B8A6', weight: 1 },
      { id: '6', text: 'Option 6', color: '#3B82F6', weight: 1 },
    ]
  },

  // Wheel Of Chores
  {
    id: 'wheel-of-chores',
    name: 'Wheel Of Chores',
    description: "Make chores fun! The Wheel Of Chores turns household tasks into a game. Spin to assign chores fairly, motivate your family, or add excitement to your daily routine.",
    category: 'Custom Wheels',
    segments: [
      { id: '1', text: 'Option 1', color: '#EF4444', weight: 1 },
      { id: '2', text: 'Option 2', color: '#F97316', weight: 1 },
      { id: '3', text: 'Option 3', color: '#EAB308', weight: 1 },
      { id: '4', text: 'Option 4', color: '#22C55E', weight: 1 },
      { id: '5', text: 'Option 5', color: '#14B8A6', weight: 1 },
      { id: '6', text: 'Option 6', color: '#3B82F6', weight: 1 },
    ]
  },

  // Wheel Of Colors
  {
    id: 'wheel-of-colors',
    name: 'Wheel Of Colors',
    description: "Brighten your day! Spin to discover new colors—perfect for artists, designers, or anyone who loves exploring vibrant shades.",
    category: 'Color & Number Wheels',
    segments: [
      { id: '1', text: 'Red', color: '#EF4444', weight: 1 },
      { id: '2', text: 'Blue', color: '#F97316', weight: 1 },
      { id: '3', text: 'Green', color: '#EAB308', weight: 1 },
      { id: '4', text: 'Yellow', color: '#22C55E', weight: 1 },
      { id: '5', text: 'Purple', color: '#14B8A6', weight: 1 },
      { id: '6', text: 'Orange', color: '#3B82F6', weight: 1 },
    ]
  },

  // Wheel Of Fun
  {
    id: 'wheel-of-fun',
    name: 'Wheel Of Fun',
    description: "Add excitement to any moment! Spin for games, challenges, and surprises. Break the ice, energize your group, or turn any day into an adventure.",
    category: 'Custom Wheels',
    segments: [
      { id: '1', text: 'Option 1', color: '#EF4444', weight: 1 },
      { id: '2', text: 'Option 2', color: '#F97316', weight: 1 },
      { id: '3', text: 'Option 3', color: '#EAB308', weight: 1 },
      { id: '4', text: 'Option 4', color: '#22C55E', weight: 1 },
      { id: '5', text: 'Option 5', color: '#14B8A6', weight: 1 },
      { id: '6', text: 'Option 6', color: '#3B82F6', weight: 1 },
    ]
  },

  // Wheel Of Names 2U09
  {
    id: 'wheel-of-names-2U09',
    name: 'Wheel Of Names 2U09',
    description: "Make every selection fair and fun! Spin to pick a winner, assign roles, or add excitement to your event, raffle, or team activity.",
    category: 'Name & Team Wheels',
    segments: [
      { id: '1', text: 'Option 1', color: '#EF4444', weight: 1 },
      { id: '2', text: 'Option 2', color: '#F97316', weight: 1 },
      { id: '3', text: 'Option 3', color: '#EAB308', weight: 1 },
      { id: '4', text: 'Option 4', color: '#22C55E', weight: 1 },
      { id: '5', text: 'Option 5', color: '#14B8A6', weight: 1 },
      { id: '6', text: 'Option 6', color: '#3B82F6', weight: 1 },
    ]
  },

  // Wheel Of Nba Players
  {
    id: 'wheel-of-nba-players',
    name: 'Wheel Of Nba Players',
    description: "Pick a random NBA player! Spin for fantasy drafts, games, or trivia. Discover new players and add excitement to your basketball experience.",
    category: 'Sports Wheels',
    segments: [
      { id: '1', text: 'Option 1', color: '#EF4444', weight: 1 },
      { id: '2', text: 'Option 2', color: '#F97316', weight: 1 },
      { id: '3', text: 'Option 3', color: '#EAB308', weight: 1 },
      { id: '4', text: 'Option 4', color: '#22C55E', weight: 1 },
      { id: '5', text: 'Option 5', color: '#14B8A6', weight: 1 },
      { id: '6', text: 'Option 6', color: '#3B82F6', weight: 1 },
    ]
  },

  // Yes Or No
  {
    id: 'yes-or-no',
    name: 'Yes Or No',
    description: "Need a quick answer? Spin the Yes or No Wheel for instant decisions, settle debates, or add a fun twist to your choices.",
    category: 'Decision Wheels',
    segments: [
      { id: '1', text: 'Option 1', color: '#EF4444', weight: 1 },
      { id: '2', text: 'Option 2', color: '#F97316', weight: 1 },
      { id: '3', text: 'Option 3', color: '#EAB308', weight: 1 },
      { id: '4', text: 'Option 4', color: '#22C55E', weight: 1 },
      { id: '5', text: 'Option 5', color: '#14B8A6', weight: 1 },
      { id: '6', text: 'Option 6', color: '#3B82F6', weight: 1 },
    ]
  },

  // Yes Or No 18DGz
  {
    id: 'yes-or-no-18DGz',
    name: 'Yes Or No 18DGz',
    description: "Can't decide? Spin the Yes Or No 18DGz Wheel for fast, unbiased answers to any situation. Break indecision, make choices, or add fun to your day.",
    category: 'Decision Wheels',
    segments: [
      { id: '1', text: 'Option 1', color: '#EF4444', weight: 1 },
      { id: '2', text: 'Option 2', color: '#F97316', weight: 1 },
      { id: '3', text: 'Option 3', color: '#EAB308', weight: 1 },
      { id: '4', text: 'Option 4', color: '#22C55E', weight: 1 },
      { id: '5', text: 'Option 5', color: '#14B8A6', weight: 1 },
      { id: '6', text: 'Option 6', color: '#3B82F6', weight: 1 },
    ]
  },

  // You Cant Reach 100
  {
    id: 'you-cant-reach-100',
    name: 'You Cant Reach 100',
    description: "Take on the challenge! The You Cant Reach 100 Wheel is perfect for games, dares, or friendly competitions. Spin to see if you can beat the odds and reach the top!",
    category: 'Custom Wheels',
    segments: [
      { id: '1', text: 'Option 1', color: '#EF4444', weight: 1 },
      { id: '2', text: 'Option 2', color: '#F97316', weight: 1 },
      { id: '3', text: 'Option 3', color: '#EAB308', weight: 1 },
      { id: '4', text: 'Option 4', color: '#22C55E', weight: 1 },
      { id: '5', text: 'Option 5', color: '#14B8A6', weight: 1 },
      { id: '6', text: 'Option 6', color: '#3B82F6', weight: 1 },
    ]
  }
];