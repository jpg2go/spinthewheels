import { WheelTemplate } from '../types/wheel';

export interface CategorizedWheelTemplate extends WheelTemplate {
  category: string;
}

export const wheelTemplates: CategorizedWheelTemplate[] = [
  // Decision Wheels
  {
    id: 'what-to-do',
    name: 'What To Do',
    description: 'Randomly pick an activity or task to do next.',
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
    name: 'What To Eat',
    description: 'Let the wheel decide your next meal!',
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
    name: 'Yes or No',
    description: 'Simple binary decision maker',
    category: 'Decision Wheels',
    segments: [
      { id: '1', text: 'Yes', color: '#22C55E', weight: 1 },
      { id: '2', text: 'No', color: '#EF4444', weight: 1 }
    ]
  },
  {
    id: 'prize-wheel',
    name: 'Prize Wheel',
    description: 'Spin to win a prize!',
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
    description: 'Classic random picker for any decision.',
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
    description: 'Randomly pick a name for any occasion.',
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
    description: 'Split names into random teams.',
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
    name: 'Color Picker',
    description: 'Choose from beautiful colors',
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
    name: 'Lucky Numbers',
    description: 'Random number generator (1-10)',
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
    description: 'Let the wheel pick your lunch!',
    category: 'Food & Meal Wheels',
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
    description: 'Pick a fast food restaurant at random.',
    category: 'Food & Meal Wheels',
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
    name: 'Truth or Dare',
    description: 'Classic party game spinner.',
    category: 'Game & Fun Wheels',
    segments: [
      { id: '1', text: 'Truth', color: '#6366F1', weight: 1 },
      { id: '2', text: 'Dare', color: '#EF4444', weight: 1 }
    ]
  },
  {
    id: 'heads-or-tails',
    name: 'Heads or Tails',
    description: 'Flip a coin virtually.',
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
    description: 'Generate secure passwords with different character types.',
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
    description: 'Pick a random letter from the alphabet.',
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
    name: 'Dice Roller',
    description: 'Roll a virtual 6-sided die.',
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
    name: 'Coin Flip',
    description: 'Flip a virtual coin for quick decisions.',
    category: 'Tools',
    segments: [
      { id: '1', text: 'Heads', color: '#F59E0B', weight: 1, emoji: '🪙' },
      { id: '2', text: 'Tails', color: '#6366F1', weight: 1, emoji: '🪙' }
    ]
  },
  {
    id: 'random-direction',
    name: 'Random Direction',
    description: 'Get a random direction or compass point.',
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
  }
];