import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { wheelTemplates } from '../data/wheelTemplates';
import { WheelSegment } from '../types/wheel';
import WheelContainer from '../components/WheelContainer';
import ControlPanel from '../components/ControlPanel';
import SEO from '../components/SEO';

const getHowToSteps = (templateName: string) => {
  const steps = {
    'Yes or No': [
      { icon: '🤔', title: 'Frame Your Question', desc: 'Think about the decision you need to make - the wheel will give you a clear yes or no answer.' },
      { icon: '🎯', title: 'Spin for Clarity', desc: 'Click spin and let the wheel make your decision with instant clarity.' },
      { icon: '✨', title: 'Trust the Result', desc: 'Accept the outcome and move forward with confidence!' }
    ],
    'What to Eat': [
      { icon: '🍽️', title: 'Add Your Cravings', desc: 'Include all your favorite foods, restaurants, and cuisines to the wheel.' },
      { icon: '🎯', title: 'Spin for Your Meal', desc: 'Let the wheel decide your next delicious meal instantly.' },
      { icon: '😋', title: 'Enjoy Your Choice', desc: 'Head to your chosen restaurant or start cooking your selected dish!' }
    ],
    'Team Picker': [
      { icon: '👥', title: 'Add Team Members', desc: 'Include all participants, students, or team members in the wheel.' },
      { icon: '🎯', title: 'Pick Your Team', desc: 'Spin to randomly select team members or assign roles fairly.' },
      { icon: '🤝', title: 'Build Your Team', desc: 'Use the results to create balanced teams or assign tasks.' }
    ],
    'Color Picker': [
      { icon: '🎨', title: 'Choose Your Palette', desc: 'Add your favorite colors or let the wheel suggest new combinations.' },
      { icon: '🎯', title: 'Spin for Color', desc: 'Get a random color that might inspire your next project or design.' },
      { icon: '✨', title: 'Apply Your Color', desc: 'Use the selected color for your artwork, design, or creative project!' }
    ],
    'Number Generator': [
      { icon: '🔢', title: 'Set Your Range', desc: 'Define the number range you need - from 1-10, 1-100, or any range.' },
      { icon: '🎯', title: 'Generate Number', desc: 'Spin to get a truly random number within your specified range.' },
      { icon: '📊', title: 'Use Your Number', desc: 'Apply the number for games, statistics, or any random selection!' }
    ],
    'Name Picker': [
      { icon: '📝', title: 'Add All Names', desc: 'Include everyone\'s name - students, participants, or team members.' },
      { icon: '🎯', title: 'Pick a Winner', desc: 'Spin to randomly select a name for prizes, tasks, or recognition.' },
      { icon: '🏆', title: 'Announce Winner', desc: 'Celebrate the selected person and assign their role or prize!' }
    ],
    'Prize Wheel': [
      { icon: '🎁', title: 'Add Your Prizes', desc: 'Include all your prizes, rewards, or incentives in the wheel.' },
      { icon: '🎯', title: 'Spin for Prizes', desc: 'Let the wheel decide who wins what prize or reward.' },
      { icon: '🎉', title: 'Celebrate Winners', desc: 'Announce the winners and distribute prizes with excitement!' }
    ],
    'Decision Maker': [
      { icon: '🤔', title: 'List Your Options', desc: 'Add all possible choices, alternatives, or decisions you\'re considering.' },
      { icon: '🎯', title: 'Make the Decision', desc: 'Spin to let the wheel make your decision with complete fairness.' },
      { icon: '✅', title: 'Act on Result', desc: 'Follow through with the selected choice and move forward!' }
    ],
    'Random Picker': [
      { icon: '🎲', title: 'Add Your Items', desc: 'Include any items, options, or choices you want to randomly select from.' },
      { icon: '🎯', title: 'Pick Randomly', desc: 'Spin to get a completely random selection from your list.' },
      { icon: '🎊', title: 'Use Your Pick', desc: 'Apply the random selection to your game, activity, or decision!' }
    ]
  };
  
  return steps[templateName as keyof typeof steps] || [
    { icon: '✨', title: 'Customize Your Adventure', desc: 'Tell us what excites you! Pick from endless possibilities - from adrenaline-pumping activities to creative projects.' },
    { icon: '🎲', title: 'Let Destiny Decide', desc: 'Watch the wheel work its magic as it reveals your next amazing adventure or creative pursuit.' },
    { icon: '🚀', title: 'Embrace the Excitement', desc: 'Dive into your chosen activity and create memories that will last a lifetime!' }
  ];
};

const getFeatures = (templateName: string) => {
  const features = {
    'Yes or No': [
      { icon: '⚡', title: 'Instant Decisions', desc: 'Get clear yes or no answers in seconds, eliminating decision paralysis.' },
      { icon: '🎯', title: 'Fair Results', desc: 'Completely random outcomes ensure unbiased decision-making every time.' },
      { icon: '📱', title: 'Mobile Friendly', desc: 'Make decisions on-the-go with our responsive design.' },
      { icon: '🔄', title: 'Unlimited Spins', desc: 'Spin as many times as you need until you\'re satisfied with the result.' }
    ],
    'What to Eat': [
      { icon: '🍕', title: 'Endless Options', desc: 'Add unlimited food choices, restaurants, and cuisines to your wheel.' },
      { icon: '🎨', title: 'Visual Appeal', desc: 'Beautiful food-themed colors and icons make meal selection fun.' },
      { icon: '📱', title: 'On-the-Go', desc: 'Perfect for deciding meals while commuting or planning ahead.' },
      { icon: '🔄', title: 'Quick Respin', desc: 'Not satisfied? Spin again instantly for a new meal suggestion.' }
    ],
    'Team Picker': [
      { icon: '⚖️', title: 'Fair Selection', desc: 'Ensure completely unbiased team assignments every time.' },
      { icon: '👥', title: 'Group Management', desc: 'Handle large groups with ease - add unlimited participants.' },
      { icon: '🎯', title: 'Role Assignment', desc: 'Perfect for assigning specific roles or responsibilities.' },
      { icon: '📊', title: 'Selection History', desc: 'Track who was picked when for balanced participation.' }
    ],
    'Color Picker': [
      { icon: '🎨', title: 'Rich Palette', desc: 'Access thousands of color combinations for any creative project.' },
      { icon: '✨', title: 'Inspiration Tool', desc: 'Discover unexpected color combinations that spark creativity.' },
      { icon: '📱', title: 'Design Ready', desc: 'Perfect for designers, artists, and creative professionals.' },
      { icon: '🔄', title: 'Endless Variety', desc: 'Never run out of color inspiration with unlimited spins.' }
    ],
    'Number Generator': [
      { icon: '🔢', title: 'Custom Ranges', desc: 'Generate numbers from any range - 1-10, 1-100, or beyond.' },
      { icon: '⚡', title: 'True Random', desc: 'Advanced algorithms ensure genuinely random number generation.' },
      { icon: '📊', title: 'Statistics Ready', desc: 'Perfect for games, research, or statistical sampling.' },
      { icon: '🔄', title: 'Instant Results', desc: 'Get random numbers instantly with no waiting time.' }
    ],
    'Name Picker': [
      { icon: '👥', title: 'Unlimited Names', desc: 'Add as many names as you need for any group size.' },
      { icon: '⚖️', title: 'Fair Selection', desc: 'Ensure everyone has an equal chance of being selected.' },
      { icon: '🎯', title: 'Multiple Uses', desc: 'Perfect for prizes, tasks, presentations, or random selection.' },
      { icon: '📱', title: 'Classroom Ready', desc: 'Ideal for teachers selecting students or assigning tasks.' }
    ],
    'Prize Wheel': [
      { icon: '🎁', title: 'Prize Variety', desc: 'Add any type of prize, reward, or incentive to your wheel.' },
      { icon: '🎉', title: 'Event Ready', desc: 'Perfect for parties, events, giveaways, and celebrations.' },
      { icon: '⚖️', title: 'Fair Distribution', desc: 'Ensure everyone has an equal chance to win prizes.' },
      { icon: '📱', title: 'Mobile Events', desc: 'Great for mobile events, trade shows, or interactive displays.' }
    ],
    'Decision Maker': [
      { icon: '🤔', title: 'Clear Choices', desc: 'Break down complex decisions into simple, manageable options.' },
      { icon: '⚡', title: 'Quick Resolution', desc: 'End decision paralysis with instant, fair outcomes.' },
      { icon: '🎯', title: 'Multiple Options', desc: 'Handle decisions with any number of alternatives.' },
      { icon: '📱', title: 'Always Available', desc: 'Make decisions anywhere, anytime with mobile access.' }
    ],
    'Random Picker': [
      { icon: '🎲', title: 'Universal Tool', desc: 'Pick randomly from any list of items, options, or choices.' },
      { icon: '⚡', title: 'Instant Results', desc: 'Get random selections immediately with no setup time.' },
      { icon: '🎯', title: 'Versatile Use', desc: 'Perfect for games, activities, decisions, or random selection.' },
      { icon: '📱', title: 'Mobile Ready', desc: 'Use anywhere with our responsive, touch-friendly design.' }
    ]
  };
  
  return features[templateName as keyof typeof features] || [
    { icon: '🎯', title: 'Genius Activity Matching', desc: 'Our smart wheel knows exactly what you need - from lazy Sunday ideas to epic weekend adventures!' },
    { icon: '🌈', title: 'Endless Possibilities', desc: 'Discover 500+ handpicked activities across 20+ exciting categories - never run out of ideas again!' },
    { icon: '⚡', title: 'Instant Excitement', desc: 'Skip the boring planning - get brilliant ideas in seconds that match your mood and energy level.' },
    { icon: '🎮', title: 'Fun Guaranteed', desc: 'Each spin brings a new adventure! Our activities are tested and loved by millions of users.' }
  ];
};

const getUseCases = (templateName: string) => {
  const useCases = {
    'Yes or No': [
      { icon: '💼', title: 'Business Decisions', desc: 'Make quick decisions about projects, investments, or business strategies.' },
      { icon: '🏠', title: 'Personal Choices', desc: 'Decide on home improvements, purchases, or lifestyle changes.' },
      { icon: '🎯', title: 'Goal Setting', desc: 'Choose between different goals, priorities, or focus areas.' }
    ],
    'What to Eat': [
      { icon: '🍕', title: 'Restaurant Nights', desc: 'Pick from your favorite restaurants when dining out.' },
      { icon: '👨‍👩‍👧‍👦', title: 'Family Meals', desc: 'Let the wheel decide family dinner plans and reduce arguments.' },
      { icon: '🥗', title: 'Healthy Eating', desc: 'Choose from healthy meal options to maintain your diet goals.' }
    ],
    'Team Picker': [
      { icon: '🏫', title: 'Classroom Activities', desc: 'Select students for presentations, group work, or special tasks.' },
      { icon: '🏆', title: 'Sports Teams', desc: 'Create balanced teams for games, tournaments, or practice sessions.' },
      { icon: '💼', title: 'Work Projects', desc: 'Assign team members to different projects or responsibilities.' }
    ],
    'Color Picker': [
      { icon: '🎨', title: 'Design Projects', desc: 'Choose color schemes for websites, logos, or graphic designs.' },
      { icon: '🏠', title: 'Home Decor', desc: 'Pick colors for painting rooms, choosing furniture, or home styling.' },
      { icon: '👕', title: 'Fashion Choices', desc: 'Select outfit colors or accessories for daily wear.' }
    ],
    'Number Generator': [
      { icon: '🎲', title: 'Board Games', desc: 'Generate random numbers for dice rolls, card games, or board games.' },
      { icon: '📊', title: 'Data Analysis', desc: 'Create random samples for research, surveys, or statistical analysis.' },
      { icon: '🎯', title: 'Fitness Goals', desc: 'Pick random workout reps, sets, or exercise variations.' }
    ],
    'Name Picker': [
      { icon: '🏫', title: 'Classroom Selection', desc: 'Choose students for questions, presentations, or special activities.' },
      { icon: '🎉', title: 'Party Games', desc: 'Select participants for games, challenges, or party activities.' },
      { icon: '💼', title: 'Work Assignments', desc: 'Assign tasks, projects, or responsibilities to team members.' }
    ],
    'Prize Wheel': [
      { icon: '🎉', title: 'Birthday Parties', desc: 'Give away prizes, gifts, or treats at birthday celebrations.' },
      { icon: '🏢', title: 'Corporate Events', desc: 'Distribute rewards, incentives, or recognition at company events.' },
      { icon: '🎪', title: 'Carnivals & Fairs', desc: 'Run prize wheels at community events, fairs, or fundraisers.' }
    ],
    'Decision Maker': [
      { icon: '🎬', title: 'Entertainment', desc: 'Choose movies, TV shows, or activities for entertainment.' },
      { icon: '✈️', title: 'Travel Plans', desc: 'Decide on destinations, activities, or travel itineraries.' },
      { icon: '🛒', title: 'Shopping Choices', desc: 'Pick between different products, brands, or purchase options.' }
    ],
    'Random Picker': [
      { icon: '🎮', title: 'Gaming', desc: 'Select random game modes, characters, or challenges for video games.' },
      { icon: '📚', title: 'Learning', desc: 'Choose random topics, subjects, or study materials for learning.' },
      { icon: '🎯', title: 'Goal Setting', desc: 'Pick random goals, challenges, or activities to try.' }
    ]
  };
  
  return useCases[templateName as keyof typeof useCases] || [
    { icon: '🎉', title: 'Epic Weekend Creator', desc: 'Transform ordinary weekends into unforgettable adventures! From secret local spots to trending activities.' },
    { icon: '✨', title: 'Boredom Buster Supreme', desc: 'Turn "I\'m bored" into "This is amazing!" with instant, exciting activity suggestions for any time of day.' },
    { icon: '🤝', title: 'Social Fun Master', desc: 'Be the friend everyone loves! Find perfect group activities that create lasting memories and stronger bonds.' }
  ];
};

const getFaqs = (templateName: string) => {
  const faqs = {
    'Yes or No': [
      {
        question: 'How accurate are the yes or no results?',
        answer: 'The wheel uses advanced randomization algorithms to ensure completely fair and unbiased results every time you spin.'
      },
      {
        question: 'Can I spin multiple times for the same decision?',
        answer: 'Yes! You can spin as many times as you need. Some people spin until they get a result that feels right.'
      },
      {
        question: 'Is this wheel suitable for important decisions?',
        answer: 'While the wheel provides random outcomes, it\'s best used for decisions where you\'re already torn between options.'
      },
      {
        question: 'Can I use this on my mobile device?',
        answer: 'Absolutely! The wheel is fully responsive and works perfectly on phones, tablets, and computers.'
      }
    ],
    'What to Eat': [
      {
        question: 'How many food options can I add?',
        answer: 'You can add unlimited food choices, restaurants, and cuisines to create the perfect meal selection wheel.'
      },
      {
        question: 'Can I organize food by categories?',
        answer: 'Yes! You can group foods by cuisine type, meal time, or dietary preferences for better organization.'
      },
      {
        question: 'What if I don\'t like the selected meal?',
        answer: 'Simply spin again! The wheel is designed for multiple spins until you find a meal you\'re excited about.'
      },
      {
        question: 'Can I save my favorite restaurants?',
        answer: 'You can customize the wheel with your favorite places and save the configuration for future use.'
      }
    ],
    'Team Picker': [
      {
        question: 'How many people can I add to the wheel?',
        answer: 'You can add unlimited participants - perfect for large groups, classrooms, or corporate events.'
      },
      {
        question: 'Is the team selection truly random?',
        answer: 'Yes! Our algorithm ensures completely fair and unbiased selection every time.'
      },
      {
        question: 'Can I create multiple teams at once?',
        answer: 'You can spin multiple times to create balanced teams, or use the wheel to assign specific roles.'
      },
      {
        question: 'Can I track who was selected when?',
        answer: 'The wheel maintains selection history to help ensure everyone gets a fair chance over time.'
      }
    ],
    'Color Picker': [
      {
        question: 'How many colors can I choose from?',
        answer: 'Access thousands of color combinations, from basic colors to complex palettes for any creative project.'
      },
      {
        question: 'Can I get color codes for design work?',
        answer: 'Yes! The wheel provides hex codes and RGB values for professional design applications.'
      },
      {
        question: 'Are the colors suitable for web design?',
        answer: 'Absolutely! All colors are web-safe and perfect for websites, logos, and digital designs.'
      },
      {
        question: 'Can I save my favorite color combinations?',
        answer: 'You can customize the wheel with your preferred colors and save them for future projects.'
      }
    ],
    'Number Generator': [
      {
        question: 'What number ranges can I use?',
        answer: 'You can generate numbers from any range - 1-10, 1-100, or even custom ranges like 50-200.'
      },
      {
        question: 'Are the numbers truly random?',
        answer: 'Yes! We use advanced algorithms to ensure genuinely random number generation every time.'
      },
      {
        question: 'Can I generate multiple numbers at once?',
        answer: 'You can spin multiple times to generate several random numbers for your needs.'
      },
      {
        question: 'Is this suitable for statistical sampling?',
        answer: 'Perfect for research, surveys, and statistical analysis requiring random number generation.'
      }
    ],
    'Name Picker': [
      {
        question: 'How many names can I add?',
        answer: 'Add unlimited names - perfect for large groups, classrooms, or any size gathering.'
      },
      {
        question: 'Is the selection process fair?',
        answer: 'Absolutely! Everyone has an equal chance of being selected with our random algorithm.'
      },
      {
        question: 'Can I use this for classroom activities?',
        answer: 'Perfect for teachers! Select students for questions, presentations, or group activities fairly.'
      },
      {
        question: 'Can I track selection history?',
        answer: 'Yes! The wheel remembers who was picked to ensure balanced participation over time.'
      }
    ],
    'Prize Wheel': [
      {
        question: 'What types of prizes can I add?',
        answer: 'Add any type of prize - physical items, gift cards, experiences, or digital rewards.'
      },
      {
        question: 'Is the prize distribution fair?',
        answer: 'Yes! Our random algorithm ensures everyone has an equal chance to win any prize.'
      },
      {
        question: 'Can I use this for corporate events?',
        answer: 'Perfect for company events, trade shows, or any gathering where you want to give away prizes.'
      },
      {
        question: 'How many prizes can I include?',
        answer: 'Add unlimited prizes to create exciting giveaways for any event size.'
      }
    ],
    'Decision Maker': [
      {
        question: 'How many options can I add?',
        answer: 'Add unlimited choices to break down complex decisions into manageable options.'
      },
      {
        question: 'Is this good for important decisions?',
        answer: 'Perfect for decisions where you\'re already considering multiple good options and need help choosing.'
      },
      {
        question: 'Can I use this for group decisions?',
        answer: 'Yes! Great for group activities, team decisions, or family choices where you need a fair outcome.'
      },
      {
        question: 'What if I don\'t like the result?',
        answer: 'You can spin again! The wheel is designed for multiple spins until you\'re satisfied.'
      }
    ],
    'Random Picker': [
      {
        question: 'What can I pick randomly?',
        answer: 'Anything! From items and options to choices and alternatives - the possibilities are endless.'
      },
      {
        question: 'How many items can I add?',
        answer: 'Add unlimited items to create comprehensive random selection wheels for any purpose.'
      },
      {
        question: 'Is the selection truly random?',
        answer: 'Yes! Our advanced algorithms ensure completely random and fair selection every time.'
      },
      {
        question: 'Can I use this for games?',
        answer: 'Perfect for games, activities, challenges, or any situation requiring random selection.'
      }
    ]
  };
  
  return faqs[templateName as keyof typeof faqs] || [
    {
      question: '🎯 What amazing activities can I discover?',
      answer: 'Get ready for endless excitement! Our wheel features 500+ curated activities from thrilling outdoor adventures and cozy indoor projects to trending social events and creative challenges. Whether you have 15 minutes or a full weekend, we\'ve got the perfect suggestion for you!'
    },
    {
      question: '✨ Can I make it match my style?',
      answer: 'Absolutely! It\'s your personal adventure generator. Add your bucket list items, remove what doesn\'t spark joy, and create custom wheels for different vibes - "Lazy Sunday", "Adventure Mode", "Date Night Special" - the possibilities are endless!'
    },
    {
      question: '🚀 How do I unlock maximum fun?',
      answer: 'Here\'s the secret sauce: Start with broad categories, spin multiple times to build your perfect day, and dare to try something new! Our users report finding their new favorite hobbies through unexpected suggestions. Plus, save your favorite spins for quick access to guaranteed good times!'
    },
    {
      question: '👥 Can I use this with friends?',
      answer: 'You\'ll be the party planning hero! Our wheel is perfect for groups of any size. From intimate gatherings to large parties, team building events to family reunions - watch as everyone gets excited about the next spin. Pro tip: Create a group challenge to try every activity the wheel suggests!'
    }
  ];
};

const CustomWheelPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const template = wheelTemplates.find(t => t.id === slug);

  const [segments, setSegments] = useState<WheelSegment[]>(
    template ? template.segments.map(s => ({ ...s })) : []
  );
  const [isSpinning, setIsSpinning] = useState(false);
  const [selectedTemplate, setSelectedTemplate] = useState(template ? template.id : 'custom');
  const [faqOpenIndex, setFaqOpenIndex] = useState(-1);

  // Catchy meta title mapping for popular wheels
  const catchyMetaTitles: Record<string, string> = {
    'truth-or-dare': 'Truth or Dare Wheel | Play & Challenge Friends Online | Spin the Wheels',
    'heads-or-tails': 'Heads or Tails | Flip a Virtual Coin Instantly | Spin the Wheels',
    'random-password-generator': 'Password Generator | Create Strong Passwords Fast | Spin the Wheels',
    'random-letter-picker': 'Random Letter Picker | Spin for Any Letter | Spin the Wheels',
    'dice-roller': 'Dice Roller | Roll Virtual Dice for Games | Spin the Wheels',
    'coin-flip': 'Coin Flip | Flip a Coin Online Instantly | Spin the Wheels',
    'random-direction': 'Random Direction Wheel | Pick a Way to Go | Spin the Wheels',
    'the-wheel-of-fortune': 'Wheel of Fortune | Spin for Your Lucky Result | Spin the Wheels',
    'magic-8-ball': 'Magic 8-Ball | Get Instant Answers Online | Spin the Wheels',
    'twister-wheel': 'Twister Wheel | Spin for Your Next Move | Spin the Wheels',
    'random-number-picker': 'Number Picker | Spin for a Random Number | Spin the Wheels',
    'wheel-of-birthdays': 'Birthday Wheel | Pick a Month for Fun | Spin the Wheels',
    'squid-game-roles': 'Squid Game Roles | Spin for Your Character | Spin the Wheels',
    'letter-picker-wheel': 'Letter Picker | Get a Random Letter | Spin the Wheels',
    'country-picker-wheel': 'Country Picker | Spin for a Random Country | Spin the Wheels',
    'state-picker-wheel': 'State Picker | Spin for a US State | Spin the Wheels',
    'date-picker-wheel': 'Date Picker | Spin for a Random Date | Spin the Wheels',
    'mlb-picker-wheel': 'MLB Picker | Get a Random Baseball Team | Spin the Wheels',
    'nba-picker-wheel': 'NBA Picker | Spin for a Basketball Team | Spin the Wheels',
    'nfl-picker-wheel': 'NFL Picker | Spin for a Football Team | Spin the Wheels',
    'wheel-of-lunch': 'Lunch Wheel | Decide What to Eat | Spin the Wheels',
    'wheel-of-dinner': 'Dinner Wheel | Pick Your Next Meal | Spin the Wheels',
    'wheel-of-breakfast': 'Breakfast Wheel | Spin for a Morning Meal | Spin the Wheels',
    'food-wheel': 'Food Wheel | Find Your Next Bite | Spin the Wheels',
    'fast-food-wheel': 'Fast Food Wheel | Pick a Place to Eat | Spin the Wheels',
    'boy-name-generator': 'Boy Name Generator | Find a Name Instantly | Spin the Wheels',
    'girl-name-generator': 'Girl Name Generator | Discover a Name Fast | Spin the Wheels',
    'pet-name-generator': 'Pet Name Generator | Name Your New Friend | Spin the Wheels',
    'dog-name-generator': 'Dog Name Generator | Spin for Dog Names | Spin the Wheels',
    'cat-name-generator': 'Cat Name Generator | Spin for Cat Names | Spin the Wheels',
    'last-name-generator': 'Last Name Generator | Find a Surname | Spin the Wheels',
    'first-name-generator': 'First Name Generator | Get a First Name | Spin the Wheels',
    'teacher-names': 'Teacher Name Picker | Spin for a Name | Spin the Wheels',
    'team-name-generator': 'Team Name Generator | Create a Winning Name | Spin the Wheels',
    'random-drawing-generator-wheel': 'Drawing Idea Wheel | Get Creative Prompts | Spin the Wheels',
    'what-to-draw': 'What to Draw | Spin for Art Ideas | Spin the Wheels',
    'raffle-generator-wheel': 'Raffle Wheel | Pick a Winner Instantly | Spin the Wheels',
    'giveaway-generator-wheel': 'Giveaway Wheel | Choose a Winner Fast | Spin the Wheels',
    'winner-wheel': 'Winner Wheel | Spin to Select a Winner | Spin the Wheels',
    'random-song-generator': 'Song Generator | Find a Random Song | Spin the Wheels',
    'random-place-generator': 'Place Generator | Spin for a Destination | Spin the Wheels',
    'game-spinner-wheel': 'Game Spinner | Pick a Game to Play | Spin the Wheels',
    'dog-breed-selector': 'Dog Breed Selector | Find Your Next Pup | Spin the Wheels',
    'does-he-love-me': 'Does He Love Me? | Spin for a Fun Answer | Spin the Wheels',
    'does-she-love-me': 'Does She Love Me? | Spin for a Fun Answer | Spin the Wheels',
    'what-should-i-do-today': 'What Should I Do? | Get Instant Ideas | Spin the Wheels',
    'random-animal-generator-wheel': 'Animal Generator | Discover a Random Animal | Spin the Wheels',
    'what-to-watch-wheel': 'What to Watch | Spin for Movie Ideas | Spin the Wheels',
    'win-or-lose': 'Win or Lose | Spin for Your Fate | Spin the Wheels',
    'a-or-b': 'A or B | Decide Instantly | Spin the Wheels',
    'activities-to-do-inside': 'Indoor Activities | Spin for Fun Ideas | Spin the Wheels',
    'what-to-do': 'What To Do Wheel | Get Instant Activity Ideas | Spin the Wheels',
    'prize-wheel': 'Prize Wheel | Spin to Win Prizes & Giveaways | Spin the Wheels',
    'spin-the-wheel': 'Spin The Wheel | Make Random Choices Easily | Spin the Wheels',
    'wheel-of-names': 'Wheel of Names | Pick Names Fairly & Randomly | Spin the Wheels',
    'random-team-generator': 'Team Generator | Create Random Teams Fast | Spin the Wheels',
    'color-picker': 'Color Picker Wheel | Find a Random Color | Spin the Wheels',
    'lucky-numbers': 'Lucky Numbers Wheel | Spin for Your Lucky Number | Spin the Wheels',
    'aesthetics-masterlist': 'Aesthetics Masterlist | Discover Your Style | Spin the Wheels',
    'aesthetics-wheel': 'Aesthetics Wheel | Explore Trending Styles | Spin the Wheels',
    'all-gen-1-pokemon': 'Gen 1 Pokémon Wheel | Pick a Classic Pokémon | Spin the Wheels',
    'all-nba-teams': 'NBA Teams Wheel | Pick a Random NBA Team | Spin the Wheels',
    'animal-wheel-includes-a-ton-of-animals': 'Animal Wheel | Discover Tons of Animals | Spin the Wheels',
    'anime-wheel': 'Anime Wheel | Spin for Anime Shows & Characters | Spin the Wheels',
    'anime-characters': 'Anime Characters Wheel | Pick a Character | Spin the Wheels',
    'apex-legends-character-randomizer': 'Apex Legends Wheel | Randomize Your Legend | Spin the Wheels',
    'bingo': 'Bingo Wheel | Play Classic Bingo Online | Spin the Wheels',
    'boy-names': 'Boy Names Wheel | Find a Boy Name Instantly | Spin the Wheels',
    'brasileiro-teams': 'Brasileiro Teams Wheel | Pick a Football Team | Spin the Wheels',
    'cartoon-characters': 'Cartoon Characters Wheel | Pick a Character | Spin the Wheels',
    'celebrity-wheel': 'Celebrity Wheel | Spin for a Celebrity | Spin the Wheels',
    'characters-hair-color': 'Hair Color Wheel | Pick a Random Hair Color | Spin the Wheels',
    'charades-wheel': 'Charades Wheel | Get Fun Charades Prompts | Spin the Wheels',
    'college-teams': 'College Teams Wheel | Pick a College Team | Spin the Wheels',
    'colleges-wheel': 'Colleges Wheel | Discover a College | Spin the Wheels',
    'color-name-list-of-color-wheel': 'Color Name Wheel | Explore Color Names | Spin the Wheels',
    'color-spinner': 'Color Spinner | Spin for a Random Color | Spin the Wheels',
    'colors': 'Colors Wheel | Pick a Color Instantly | Spin the Wheels',
    'country-wheel': 'Country Wheel | Pick a Random Country | Spin the Wheels',
    'dandys-world': 'Dandy\'s World Wheel | Explore Unique Worlds | Spin the Wheels',
    'dandys-world-characters-including-unreleased': 'Dandy\'s World Wheel | Unlock Hidden Characters | Spin the Wheels',
    'dandys-world-toons': 'Dandy\'s Toons Wheel | Pick a Cartoon Character | Spin the Wheels',
    'dandys-world-trinkets': 'Dandy\'s Trinkets Wheel | Find Magical Items | Spin the Wheels',
    'dandys-world-wheel': 'Dandy\'s World Wheel | Explore Dandy\'s Universe | Spin the Wheels',
    'decision-maker': 'Decision Maker Wheel | Make Choices Instantly | Spin the Wheels',
    'disney-character-wheel': 'Disney Character Wheel | Pick a Disney Character | Spin the Wheels',
    'disney-movie-generator': 'Disney Movie Generator | Find a Disney Movie | Spin the Wheels',
    'disney-movie-picker': 'Disney Movie Picker | Choose a Disney Film | Spin the Wheels',
    'drawing-ideas-wheel': 'Drawing Ideas Wheel | Get Creative Prompts | Spin the Wheels',
    'dress-to-impress-themes': 'Dress to Impress Wheel | Find Fashion Themes | Spin the Wheels',
    'dti-challenges': 'DTI Challenges Wheel | Take a Drawing Challenge | Spin the Wheels',
    'dti-themes': 'DTI Themes Wheel | Find Drawing Themes | Spin the Wheels',
    'elemental-wheel': 'Elemental Wheel | Spin for Elements | Spin the Wheels',
    'elements-wheel': 'Elements Wheel | Discover Natural Elements | Spin the Wheels',
    'european-roulette': 'European Roulette | Spin the Classic Casino Wheel | Spin the Wheels',
    'every-genshin-character': 'Genshin Character Wheel | Pick a Hero to Play | Spin the Wheels',
    'every-item-in-minecraft': 'Minecraft Items Wheel | Discover Random Items | Spin the Wheels',
    'every-mainline-pokemon-game-to-date': 'Pokémon Games Wheel | Pick a Pokémon Game | Spin the Wheels',
    'every-pokemon': 'Pokémon Wheel | Discover Every Pokémon | Spin the Wheels',
    'exercise-wheel': 'Exercise Wheel | Get a Random Workout | Spin the Wheels',
    'eye-colours': 'Eye Colours Wheel | Discover Eye Color Ideas | Spin the Wheels',
    'fashion-style': 'Fashion Style Wheel | Find Your Next Look | Spin the Wheels',
    'fast-food-restaurants': 'Fast Food Restaurants | Choose Where to Eat | Spin the Wheels',
    'films-to-watch': 'Films to Watch Wheel | Find a Movie to Watch | Spin the Wheels',
    'flip-a-coin': 'Flip a Coin | Make Quick Decisions | Spin the Wheels',
    'fortnite-challenge-wheel': 'Fortnite Challenge Wheel | Get a Game Challenge | Spin the Wheels',
    'fortnite-challenges-what-will-u-get': 'Fortnite Wheel | Get a Random Challenge | Spin the Wheels',
    'friend-wheel': 'Friend Wheel | Pick a Friend for Fun | Spin the Wheels',
    'fun-dares-to-do': 'Fun Dares Wheel | Get a Dare to Try | Spin the Wheels',
    'gender-randomizer': 'Gender Randomizer Wheel | Assign Random Genders | Spin the Wheels',
    'genshin-impact-characters': 'Genshin Impact Wheel | Pick a Character | Spin the Wheels',
    'hairstyles-wheel': 'Hairstyles Wheel | Find a New Hairstyle | Spin the Wheels',
    'heads-or-tails-flip-a-coin': 'Heads or Tails | Flip a Coin Online | Spin the Wheels',
    'height-for-characters': 'Height Wheel | Pick a Character Height | Spin the Wheels',
    'help-wheel': 'Help | Get Support for Spin the Wheels | Spin the Wheels',
    'jobs-wheel': 'Jobs Wheel | Pick a Random Job | Spin the Wheels',
    'jojo-stand-wheel-part-38': 'JoJo Stand Wheel | Get a Stand Assignment | Spin the Wheels',
    'kinds-of-aesthetic': 'Aesthetic Wheel | Discover Your Aesthetic | Spin the Wheels',
    'list-of-dares-and-truths-to-do-with-your-friends': 'Dares & Truths Wheel | Get Fun Prompts | Spin the Wheels',
    'lunch-options': 'Lunch Options Wheel | Decide What to Eat | Spin the Wheels',
    'marvel-rivals-pick-your-character': 'Marvel Rivals Wheel | Pick a Character | Spin the Wheels',
    'mha-wheel': 'MHA Wheel | Pick a Hero or Villain | Spin the Wheels',
    'mlb-teams': 'MLB Teams Wheel | Pick a Baseball Team | Spin the Wheels',
    'music-genres-2Opb': 'Music Genres Wheel | Discover a Genre | Spin the Wheels',
    'music-genres-48S8': 'Music Genres Wheel | Find a Music Genre | Spin the Wheels',
    'nba-teams': 'NBA Teams Wheel | Pick a Basketball Team | Spin the Wheels',
    'ncaa-division-i-fbs-teams': 'NCAA FBS Teams Wheel | Pick a College Team | Spin the Wheels',
    'nfl-all-positions': 'NFL Positions Wheel | Pick a Football Position | Spin the Wheels',
    'nfl-teams-2ISA': 'NFL Teams Wheel | Pick a Football Team | Spin the Wheels',
    'nfl-teams-324T5': 'NFL Teams Wheel | Discover a Team | Spin the Wheels',
    'nfl-teams-4YRH': 'NFL Teams Wheel | Choose a Team | Spin the Wheels',
    'numberblocks-0-to-absolute-infinity': 'Numberblocks Wheel | Pick a Number | Spin the Wheels',
    'numbers-1-100': 'Numbers Wheel | Pick a Number 1-100 | Spin the Wheels',
    'numbers-1-through-150': 'Numbers Wheel | Pick a Number 1-150 | Spin the Wheels',
    'personality-wheel': 'Personality Wheel | Discover Your Type | Spin the Wheels',
    'pokemon-games': 'Pokémon Games Wheel | Pick a Game to Play | Spin the Wheels',
    'pokmon-types': 'Pokémon Types Wheel | Discover a Type | Spin the Wheels',
    'punishment-wheel': 'Punishment Wheel | Assign a Fun Punishment | Spin the Wheels',
    'rainbow-3xl3': 'Rainbow Wheel | Pick a Colorful Option | Spin the Wheels',
    'rainbow-55RhC': 'Rainbow Wheel | Discover Rainbow Colors | Spin the Wheels',
    'random-color-20vU': 'Random Color Wheel | Pick a Color | Spin the Wheels',
    'random-emoji-2CO4': 'Random Emoji Wheel | Get a Fun Emoji | Spin the Wheels',
    'random-nfl-players': 'NFL Players Wheel | Pick a Player | Spin the Wheels',
    'random-pokemon-types': 'Pokémon Types Wheel | Get a Random Type | Spin the Wheels',
    'random-themes-2BbZ': 'Random Themes Wheel | Find a Theme | Spin the Wheels',
    'restaurants': 'Restaurants Wheel | Decide Where to Eat | Spin the Wheels',
    'roleplay-themes-2WYS': 'Roleplay Themes Wheel | Get a Theme | Spin the Wheels',
    'sims-4-wheel-of-drama': 'Sims 4 Drama Wheel | Add Drama to Your Game | Spin the Wheels',
    'skin-color': 'Skin Color Wheel | Pick a Skin Tone | Spin the Wheels',
    'spin-of-arrows': 'Spin of Arrows Wheel | Pick a Direction | Spin the Wheels',
    'steven-universe-characters': 'Steven Universe Wheel | Pick a Character | Spin the Wheels',
    'superheroes-wheel': 'Superheroes Wheel | Pick a Hero | Spin the Wheels',
    'the-wheel-of-doom-3MhQ': 'Wheel of Doom | Spin for a Challenge | Spin the Wheels',
    'the-yes-or-no-wheel': 'Yes or No Wheel | Decide Instantly | Spin the Wheels',
    'themes-wheel': 'Themes Wheel | Find a Theme to Try | Spin the Wheels',
    'themes-7LLU': 'Themes Wheel | Discover New Themes | Spin the Wheels',
    'truth-or-dare-48gM': 'Truth or Dare Wheel | Get a Fun Prompt | Spin the Wheels',
    'ultimate-character-wheel-3f3w': 'Character Wheel | Pick a Character | Spin the Wheels',
    'untitled-wheel-408RF': 'Untitled Wheel | Spin for a Surprise | Spin the Wheels',
    'wheel-challenge': 'Wheel Challenge | Take on a Challenge | Spin the Wheels',
    'weight-class-wheel': 'Weight Class Wheel | Pick a Class | Spin the Wheels',
    'what-animal-are-you-100-animals': 'Animal Wheel | Discover Your Animal | Spin the Wheels',
    'what-food-should-you-eat-for-dinner': 'Dinner Wheel | Decide What to Eat | Spin the Wheels',
    'what-to-draw-2joe': 'What to Draw Wheel | Get Drawing Ideas | Spin the Wheels',
    'whats-the-best-birthday': 'Birthday Wheel | Find the Best Birthday | Spin the Wheels',
    'wheel-of-chores': 'Chores Wheel | Assign a Chore | Spin the Wheels',
    'wheel-of-colors': 'Colors Wheel | Pick a Color | Spin the Wheels',
    'wheel-of-fun': 'Fun Wheel | Spin for a Fun Activity | Spin the Wheels',
    'wheel-of-names-2U09': 'Names Wheel | Pick a Name | Spin the Wheels',
    'wheel-of-nba-players': 'NBA Players Wheel | Pick a Player | Spin the Wheels',
    'yes-or-no': 'Yes or No Wheel | Decide Instantly | Spin the Wheels',
    'yes-or-no-18DGz': 'Yes or No Wheel | Get a Quick Answer | Spin the Wheels',
    'you-cant-reach-100': 'Challenge Wheel | Try to Reach 100 | Spin the Wheels',
    
  };

  if (!template) {
    // Get slug from params or fallback to window.location.pathname
    const rawSlug = slug || window.location.pathname.replace(/^\//, '');
    // Convert slug to Title Case
    const toTitleCase = (str: string) => str.replace(/[-_]+/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
    const prettyName = toTitleCase(rawSlug);
    // Use catchy meta title if available, else fallback
    const metaTitle = catchyMetaTitles[rawSlug] || `${prettyName} | Spin for fun and surprises! | Spin the Wheels`;
    const metaDescription = `Spin the ${prettyName} wheel online for fun, random results, and decision making. Try this unique wheel now!`;
    return (
      <>
        <SEO 
          title={metaTitle}
          description={metaDescription}
          keywords={`${prettyName.toLowerCase()}, spinning wheel, random picker, decision maker, wheel spinner, online wheel`}
          canonical={`/${rawSlug}`}
        />
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 via-white to-purple-50">
          <div className="bg-white rounded-2xl shadow-xl p-10 border border-gray-200/50 text-center max-w-md">
            <h1 className="text-3xl font-bold text-red-600 mb-4">Template not found</h1>
            <p className="text-gray-600 mb-6">The wheel template you are looking for does not exist.</p>
            <div className="space-y-4">
              <Link
                to="/templates"
                className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors font-medium"
              >
                Browse All Templates
              </Link>
              <div className="text-sm text-gray-500">
                or <Link to="/" className="text-indigo-600 hover:text-indigo-700">create a custom wheel</Link>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }

  // For known templates, use catchy meta title if available, else name + first sentence
  const getShortDescription = (desc: string) => {
    if (!desc) return '';
    const firstSentence = desc.split('. ')[0].replace(/\.$/, '');
    return firstSentence;
  };
  const shortDescription = getShortDescription(template.description);
  // Restore original meta title logic: catchyMetaTitles[template.id] || `[Wheel Name] – [Short Description] | Spin the Wheels`
  const metaTitle = catchyMetaTitles[template.id] || `${template.name} – ${shortDescription} | Spin the Wheels`;

  const howToSteps = getHowToSteps(template.name);
  const features = getFeatures(template.name);
  const useCases = getUseCases(template.name);
  const faqs = getFaqs(template.name);

  return (
    <>
      <SEO 
        title={metaTitle}
        description={template.description}
        keywords={`${template.name.toLowerCase()}, spinning wheel, ${template.category.toLowerCase()}, free wheel, random picker, decision maker, wheel spinner, online wheel`}
        canonical={`/${template.id}`}
      />
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
        <div className="animated-bg"></div>
        <main className="relative z-10">
        <section className="py-12 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-4 md:mb-6 px-4">
                {template.name}
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto px-4">
                {(() => {
                  const customIntros: Record<string, string> = {
                    'aesthetics-wheel': "Spin to discover a fresh aesthetic! Let the wheel inspire your next look, art project, or social feed with a style that's uniquely you.",
                    'all-gen-1-pokemon': "Catch the nostalgia! Spin to pick a classic Gen 1 Pokémon and relive the magic of your favorite adventures or spark a new creative idea.",
                    'all-nba-teams': "Which team will you get? Spin for a random NBA team and add excitement to your next game night, draft, or basketball challenge.",
                    'animal-wheel-includes-a-ton-of-animals': "Explore the wild side! Spin to meet a new animal and let your imagination roam—perfect for games, learning, or creative inspiration.",
                    'anime-wheel': "Step into the world of anime! Spin to discover a new show, genre, or character and fuel your next binge, drawing, or cosplay idea.",
                    'anime-characters': "Which anime character will you meet? Spin for a surprise and let your next story, drawing, or game be inspired by a new favorite.",
                    'apex-legends-character-randomizer': "Drop into action! Spin to pick a random Apex Legend and challenge yourself to master a new hero in your next match.",
                    'bingo': "Bring the fun to your party! Spin for a bingo number and keep the excitement going with every round—perfect for all ages.",
                    'boy-names': "Looking for a boy's name? Spin for a classic, modern, or unique option and find the perfect fit for your story, game, or new arrival.",
                    'brasileiro-teams': "Support a new team! Spin to pick a Brazilian football club and add a twist to your next match, trivia, or fan challenge.",
                    'cartoon-characters': "Meet a cartoon classic! Spin to discover a character for your next game, drawing, or party and bring a bit of animation to your day.",
                    'celebrity-wheel': "Step into the spotlight! Spin to land on a celebrity and add star power to your next game, event, or creative project.",
                    'characters-hair-color': "Change it up! Spin for a random hair color and let your next character, drawing, or style be bold, bright, or totally unexpected.",
                    'charades-wheel': "Discover fun charades ideas with a single spin. Perfect for parties, family nights, or breaking the ice with friends.",
                    'college-teams': "Instantly pick a college team for your next game, debate, or trivia night. Great for sports fans and students alike.",
                    'colleges-wheel': "Spin to select a college from a diverse list. Ideal for decision-making, research, or just exploring new campuses.",
                    'color-name-list-of-color-wheel': "Explore a vibrant wheel of color names. Perfect for artists, designers, or anyone seeking creative inspiration.",
                    'color-spinner': "Spin the wheel to land on a random color. Great for games, art projects, or choosing your next favorite shade.",
                    'colors-wheel': "Let the wheel decide your next color. Fun for crafts, design choices, or adding a splash of surprise to your day.",
                    'country-wheel': "Travel the globe with a spin! Randomly select a country for learning, games, or planning your next adventure.",
                    'dandys-world': "Enter Dandy's World and spin for surprises, characters, and more. A fun way to explore this imaginative universe.",
                    'dandys-world-characters-including-unreleased': "Explore every character, including unreleased ones, from Dandy's World. Spin for a surprise reveal each time.",
                    'dandys-world-toons': "Spin to meet the animated toons of Dandy's World. Perfect for discovering new favorites and classic characters.",
                    'dandys-world-trinkets': "Discover magical trinkets from Dandy's World. Spin to find your next collectible or story inspiration.",
                    'dandys-world-wheel': "Spin the main wheel of Dandy's World for endless fun, surprises, and creative possibilities.",
                    'decision-maker': "Let the wheel make your next choice. Perfect for quick decisions, group activities, or settling friendly debates.",
                    'disney-character-wheel': "Spin the wheel and step into Disney magic discover which character you'll become for your next game, drawing, or story adventure!",
                    'disney-movie-generator': "Let the magic decide! Spin for a Disney movie and turn any night into a memorable adventure with a surprise film pick.",
                    'disney-movie-picker': "Can't choose a Disney classic? Spin and let the wheel whisk you away to a world of animated wonder for your next movie night.",
                    'drawing-ideas-wheel': "Break through creative blocks! Spin for a unique drawing prompt and ignite your imagination with a fresh idea every time.",
                    'dress-to-impress-themes': "Transform your style! Spin for a bold new theme and make your next outfit, party, or project stand out from the crowd.",
                    'dti-challenges': "Challenge your creativity! Spin for a daring prompt and push your artistic, writing, or gaming skills to exciting new heights.",
                    'dti-themes': "Need a spark? Spin for a creative theme and jumpstart your next art, story, or party with a burst of inspiration.",
                    'elemental-wheel': "Embrace the elements! Spin to reveal fire, water, earth, or air and let nature inspire your next story, game, or design.",
                    'elements-wheel': "Discover the power of nature! Spin for an element and use it to fuel your creativity in art, writing, or learning.",
                    'european-roulette': "Bring Vegas home! Spin the European Roulette wheel for instant excitement—perfect for parties, game nights, or testing your luck.",
                    'every-genshin-character': "Meet your next Genshin hero! Spin to discover a character and add excitement to your gameplay, cosplay, or creative projects.",
                    'every-item-in-minecraft': "Unleash your creativity! Spin for a random Minecraft item and let it inspire your next build, challenge, or adventure.",
                    'every-mainline-pokemon-game-to-date': "Relive Pokémon history! Spin to pick a mainline game and set off on a nostalgic or brand-new adventure.",
                    'every-pokemon': "Catch the excitement! Spin to discover any Pokémon and find your next favorite for games, teams, or creative fun.",
                    'exercise-wheel': "Make fitness fun! Spin for a surprise workout and turn every session into an exciting, energizing challenge.",
                    'eye-colours': "Celebrate diversity! Spin to discover a fresh eye color and add depth to your next drawing or creative project.",
                    'fashion-style': "Reinvent your look! Spin for a fashion style and step out with confidence in a trend that's uniquely you.",
                    'fast-food-restaurants': "Hungry for a fast bite? Spin to pick a fast food restaurant and turn your next meal into a delicious adventure. Perfect for foodies and indecisive eaters!",
                    'films-to-watch': 'Can’t pick a movie? Spin the Films to Watch Wheel for a fun, random film suggestion perfect for movie nights and binge-watch sessions!',
                    'flip-a-coin': "Need a quick decision? Spin the Flip a Coin Wheel and let fate choose for you. Perfect for settling debates or making choices in a flash!",
                    'fortnite-challenge-wheel': 'Spin the Fortnite Challenge Wheel to get random in-game tasks that add excitement and test your skills in every match!',
                    'fortnite-challenges-what-will-u-get': 'Can’t decide on your next move in Fortnite? Spin and reveal a random challenge to keep every match thrilling and unpredictable!',
                    'friend-wheel': 'Spin the Friend Wheel to pick someone for dares, tasks, or just fun decisions perfect for group games and parties.',
                    'fun-dares-to-do': 'Discover creative and bold dares for friends and parties. Spin the wheel and add instant fun to your day or night!',
                    'gender-randomizer': 'Instantly generate a random gender for characters, stories, or roleplay with this easy-to-use gender randomizer tool.',
                    'genshin-impact-characters': 'Spin to choose a random Genshin Impact character and spice up your next adventure or build challenge!',
                    'hairstyles-wheel': 'Get fun and trendy hairstyle ideas at random. Great for character design, avatars, or your next personal style switch!',
                    'heads-or-tails-flip-a-coin': 'Flip a virtual coin instantly settle arguments, make quick decisions, or add fun randomness to your day!',
                    'height-for-characters': 'Generate unique heights for your characters realistic or fun for stories, roleplay, games, or creative projects.',
                    'help-wheel': 'Need assistance using our wheels? Explore helpful guides, tips, and answers to make the most of every spin.',
                    'jobs-wheel': 'Not sure what job to try or give a character? Spin to discover random careers from fun to fantasy and beyond!',
                    'jojo-stand-wheel-part-38': 'Create your own JoJo Stand with a random name, power, and type inspired by the world of JoJo’s Bizarre Adventure.',
                    'kinds-of-aesthetic': 'Explore random aesthetics to match your vibe or spark creativity for outfits, profiles, or art inspiration.',
                    'list-of-dares-and-truths-to-do-with-your-friends': 'Find exciting dares and truths for parties, sleepovers, or online hangouts guaranteed to get everyone talking!',
                    'lunch-options': 'Not sure what to eat? Spin the Lunch Options Wheel to discover tasty meal ideas in seconds.',
                    'marvel-rivals-pick-your-character': 'Spin to randomly select your Marvel Rivals character perfect for game nights and fan matchups!',
                    'mha-wheel': 'Randomize My Hero Academia characters or quirks for fun, fan fiction, cosplay, or creative challenges!',
                    'mlb-teams': 'Spin and pick a random MLB team great for challenges, trivia, fantasy games, or just for fun!',
                    'music-genres-2Opb': 'Spin to discover random music genres from rock to EDM perfect for playlist ideas or exploring new sounds.',
                    'music-genres-48S8': 'Explore a wide mix of music genres with each spin. Great for discovering new styles or shaking up your playlist.',
                    'nba-teams': 'Pick a random NBA team to support, debate, or draft perfect for games, quizzes, and sports fans alike!',
                    'ncaa-division-i-fbs-teams': 'Spin to select a random NCAA FBS football team great for fans, fantasy picks, or school pride matchups!',
                    'nfl-all-positions': 'Discover a random NFL position with each spin great for training, fantasy football, or football fun!',
                    'nfl-teams-2ISA': 'Pick an NFL team at random for game day, fantasy leagues, or to settle sports debates easily!',
                    'nfl-teams-324T5': 'Can’t choose an NFL team? Let the wheel decide with a fun and fast spin for fans and friends.',
                    'nfl-teams-4YRH': 'Add randomness to your football fun by spinning for a surprise NFL team perfect for matchups or fantasy games!',
                    'numberblocks-0-to-absolute-infinity': 'Explore Numberblocks from 0 to infinity with a spin great for fun, learning, and imagination!',
                    'numbers-1-100': 'Generate numbers from 1 to 100 randomly perfect for games, education, and decision-making fun!',
                    'numbers-1-through-150': 'Need a number fast? Spin to randomly get a number between 1 and 150 useful for games or quick choices.',
                    'personality-wheel': 'Discover a random personality type or trait to inspire characters, games, or fun self-discovery moments with one quick spin!',
                    'pokemon-games': 'Can’t decide which Pokémon game to play? Spin and get a random pick from classic hits to new adventures.',
                    'pokmon-types': 'Explore random Pokémon types for gameplay strategies, training ideas, or just for fun with one quick spin!',
                    'punishment-wheel': 'Add suspense with the Punishment Wheel! Spin to reveal fun, mild, or creative punishments for games or dares.',
                    'rainbow-3xl3': 'Spin the rainbow and discover vibrant colors or themes perfect for art, design, or a touch of daily inspiration.',
                    'rainbow-55RhC': 'Get a random rainbow inspired color or vibe for creative projects, fashion ideas, or mood boards.',
                    'random-color-20vU': 'Generate a random color in one click perfect for design choices, art projects, or creative inspiration.',
                    'random-emoji-2CO4': 'Spin and get a fun random emoji great for texting games, captions, reactions, or just a quick smile!',
                    'random-nfl--players': 'Discover a random NFL player instantly ideal for fantasy football, debates, or quick team picks.',
                    'random-pokemon-types': 'Get a surprise Pokémon type with every spin great for battles, team building, or roleplay fun!',
                    'random-themes-2BbZ': 'Find a fresh and fun theme for writing, decorating, parties, or roleplaying with just one spin!',
                    'restaurants': 'Can’t pick a place to eat? Spin the restaurant wheel to discover random dining ideas instantly!',
                    'roleplay-themes-2WYS': 'Need roleplay ideas? Spin to get unique and creative roleplay themes for games, writing, or cosplay!',
                    'sims-4-wheel-of-drama': 'Add chaos to your Sims 4 gameplay with random drama events spin and let the story unfold!',
                    'skin-color': 'Generate random skin tones for characters, avatars, or inclusive creative projects with one click.',
                    'spin-of-arrows': 'Spin the wheel and let arrows guide your decision great for games, choices, or interactive fun!',
                    'steven-universe-characters': 'Spin to select a random Steven Universe character great for quizzes, cosplay, or creative inspiration!',
                    'superheroes-wheel': 'Get a random superhero from classic or modern universes great for games, costumes, or fun matchups!',
                    'the-wheel-of-doom-3MhQ': 'Spin the Wheel of Doom and face hilarious, wild, or tricky challenges perfect for brave gamers and party fun!',
                    'themes-wheel': 'Need a theme fast? Spin to discover fresh ideas for parties, art, writing, or social media inspiration.',
                    'themes-7LLU': 'Find creative themes for every occasion spin to spark ideas for content, design, or fun challenges!',
                    'truth-or-dare-48gM': 'Spin for random truth or dare questions perfect for friends, parties, or online fun anytime!',
                    'ultimate-character-wheel-3f3w': 'Create unique characters with a spin! Great for stories, roleplay, or creative character generation.',
                    'untitled-wheel-408RF': 'Spin for a mystery result this untitled wheel delivers random fun across all kinds of categories!',
                    'wheel-challenge': 'Try a random wheel challenge to test your limits, spark creativity, or make any moment more exciting!',
                    'weight-class-wheel': 'Randomly assign a weight class great for combat sports, character design, or fitness games!',
                    'what-animal-are-you-100-animals': 'Spin to discover what animal matches your personality from a list of 100 unique creatures!',
                    'what-food-should-you-eat-for-dinner': 'Hungry but can’t decide? Spin to get a quick, fun dinner idea that satisfies cravings and saves time.',
                    'what-to-draw-2joe': 'Get a random drawing idea to boost creativity, practice art, or beat artist’s block in seconds!',
                    'whats-the-best-birthday': 'Spin and find out what kind of birthday celebration suits you best fun, unique, and just for you!',
                    'wheel-of-chores': 'Make chores fun! Spin the wheel to randomly assign household tasks quickly and fairly.',
                    'wheel-of-colors': 'Spin to land on a random color great for design, outfits, art, and daily inspiration!',
                    'wheel-of-fun': 'Spin the Wheel of Fun and unlock a random surprise activity to brighten your day and cure boredom.',
                    'wheel-of-names-2U09': 'Enter names and spin to pick someone at random ideal for giveaways, tasks, or classroom fun!',
                    'wheel-of-nba-players': 'Spin to get a random NBA player perfect for fantasy drafts, games, or player-themed fun!',
                    'you-cant-reach-100': 'Spin your way through the challenge can you reach 100? A fun, addictive randomizer game to test your luck!',                  
                    'what-to-do': "Feeling indecisive? Give the What To Do Wheel a spin and uncover a fresh activity or idea that can turn any ordinary moment into something memorable and fun.",
                    'prize-wheel': "Bring a spark to your next event with the Prize Wheel. Watch as anticipation builds and every spin creates a new winner, perfect for any celebration.",
                    'spin-the-wheel': "Turn choices into a game with Spin the Wheel. Add your options, give it a whirl, and let the result guide your next move or group decision.",
                    'wheel-of-names': "Make picking names simple and fair with the Wheel of Names. Every spin offers a new chance, whether you are assigning tasks or choosing a winner.",
                    'random-team-generator': "Form teams effortlessly with the Random Team Generator. One spin is all it takes to create balanced groups for sports, projects, or friendly competitions.",
                    'color-picker': "Discover your next favorite color with the Color Picker Wheel. Each spin reveals a new shade, perfect for sparking creativity in art or design.",
                    'lucky-numbers': "Add a touch of luck to your day with the Lucky Numbers Wheel. Spin to reveal a number that could inspire your next game, raffle, or special moment.",
                    'wheel-of-lunch': "Let the Wheel of Lunch decide your next meal. With a single spin, you can find a delicious idea that makes lunch exciting, whether you are solo or with friends.",
                    'fast-food-wheel': "Craving something quick and tasty? Let the Fast Food Wheel decide your next meal adventure. Give it a spin and discover a new favorite spot or a classic treat you might have overlooked.",
                    'truth-or-dare': "Ready to break the ice or spice up your gathering? The Truth or Dare Wheel brings a playful twist to your game night, serving up surprises and laughter with every spin.",
                    'heads-or-tails': "Can't make up your mind? The Heads or Tails Wheel offers a simple, fun way to settle any decision. Just spin and let fate choose for you—no more second guessing.",
                    'random-password-generator': "Need a strong password in a hurry? The Random Password Generator Wheel creates secure, unpredictable passwords with a single spin, making online safety effortless and stress-free.",
                    'random-letter-picker': "Looking for a random letter for your next game, activity, or creative project? Spin the Random Letter Picker and let the alphabet surprise you with a fresh start every time.",
                    'dice-roller': "No dice? No problem! The Dice Roller Wheel brings the thrill of rolling dice to your screen, perfect for board games, classroom fun, or spontaneous challenges.",
                    'coin-flip': "When you need a quick answer, the Coin Flip Wheel is here to help. Spin for heads or tails and let chance guide your next move, whether it's a big decision or a friendly bet.",
                    'random-direction': "Feeling adventurous? The Random Direction Wheel points you toward your next destination or activity. Spin and see where the day takes you—sometimes the best journeys are unplanned.",
                    'the-wheel-of-fortune': "Step up and test your luck with the Wheel of Fortune. Each spin brings excitement and the chance for a surprise outcome, making every moment feel like a game show.",
                    'magic-8-ball': "Got a burning question? The Magic 8-Ball Wheel delivers playful, mysterious answers with every spin. Ask away and see what the universe has in store for you.",
                    'twister-wheel': "Ready for a twist? Give the Twister Wheel a spin and let it pick your next move. Perfect for parties, family nights, or anytime you want to add a little laughter and unpredictability to your game.",
                    'random-number-picker': "Need a number on the spot? Spin the Random Number Picker and watch as chance chooses for you. Great for games, raffles, or settling those little debates that pop up every day.",
                    'wheel-of-birthdays': "Celebrate in style! Spin the Wheel of Birthdays to pick a special month or date—ideal for party games, fun surprises, or just adding a spark to your celebrations.",
                    'squid-game-roles': "Step into the world of Squid Game! Spin to discover which role you'd play in the ultimate challenge. Whether you're with friends or just curious, this wheel brings the thrill of the game to your screen.",
                    'letter-picker-wheel': "Stuck on a letter? Let the Letter Picker Wheel decide for you. It's a fun way to start word games, pick initials, or inspire creative projects with a random letter every time.",
                    'country-picker-wheel': "Explore the globe with a spin! The Country Picker Wheel is your ticket to discovering new places, planning travel games, or learning about the world in a fun, random way.",
                    'state-picker-wheel': "Which state will it be? Spin the State Picker Wheel and let fate choose a U.S. state for your next adventure, trivia game, or classroom activity.",
                    'date-picker-wheel': "Can't pick a date? Let the Date Picker Wheel do it for you. Whether you're planning an event, a challenge, or just want a surprise, this wheel makes choosing a date effortless and fun.",
                    'mlb-picker-wheel': "Batter up! Spin the MLB Picker Wheel to get matched with a random baseball team. Perfect for drafts, friendly competitions, or discovering a new team to root for.",
                    'nba-picker-wheel': "Take your shot! The NBA Picker Wheel spins up a random basketball team for you—great for fantasy drafts, challenges, or just mixing up your fan experience.",
                    'nfl-picker-wheel': "Ready for kickoff? Spin the NFL Picker Wheel and see which football team you'll get. It's a fun way to shake up your game day, pool, or sports trivia.",
                    'wheel-of-dinner': "What's for dinner? Let the Wheel of Dinner surprise you with a tasty idea. Spin for inspiration and make mealtime exciting, whether you're cooking solo or feeding a crowd.",
                    'wheel-of-breakfast': "Start your day with a spin! The Wheel of Breakfast serves up fresh ideas for your morning meal, making breakfast time a little more adventurous and a lot more fun.",
                    'food-wheel': "Hungry for something new? Spin the Food Wheel and discover a dish or snack you might not have thought of. It's a delicious way to break out of your routine.",
                    'boy-name-generator': "Searching for the perfect boy's name? Give the Boy Name Generator a spin and explore a world of names—classic, modern, and everything in between.",
                    'girl-name-generator': "Find a name that stands out! Spin the Girl Name Generator and uncover unique, beautiful names for your story, project, or new arrival.",
                    'pet-name-generator': "Naming a new furry friend? The Pet Name Generator Wheel is packed with playful, cute, and clever names. Spin to find the one that fits your pet's personality.",
                    'dog-name-generator': "Every dog deserves a great name! Spin the Dog Name Generator and fetch a name that's as fun and lovable as your pup.",
                    'cat-name-generator': "Give your cat a name as unique as their personality! Spin the wheel and discover playful, charming, or quirky names for your feline friend—perfect for new kittens or storybook characters.",
                    'first-name-generator': "Stuck on a first name? Spin for inspiration and uncover a fresh, memorable name for your next character, project, or even a new arrival in the family.",
                    'giveaway-generator-wheel': "Hosting a giveaway? Let the wheel pick your winner in a fun, fair, and exciting way. Every spin builds anticipation and makes your event unforgettable.",
                    'last-name-generator': "Find the perfect surname in a snap! Spin the wheel to reveal classic, modern, or rare last names for your stories, games, or creative projects.",
                    'random-animal-generator-wheel': "Curious about which animal you'll get? Spin the wheel and meet a new creature each time—great for games, learning, or sparking your imagination.",
                    'random-drawing-generator-wheel': "Need a creative boost? Spin for a drawing prompt and jumpstart your next masterpiece with a fresh, unexpected idea every time.",
                    'random-place-generator': "Where in the world will you go? Spin to discover a new destination—perfect for travel dreams, writing prompts, or classroom fun.",
                    'random-song-generator': "Let the music play! Spin the wheel to find a random song and add a surprise soundtrack to your day, party, or creative session.",
                    'raffle-generator-wheel': "Make your raffle draws exciting and transparent! Spin to select a winner and add a touch of suspense to your next event or fundraiser.",
                    'teacher-names': "Need to pick a teacher or assign classroom roles? Spin for a name and keep things fair, fun, and full of surprises in your school activities.",
                    'team-name-generator': "Forming a new team? Spin for a creative, catchy team name that stands out—ideal for sports, projects, or group games.",
                    'what-should-i-do-today': "Feeling indecisive? Spin the wheel and discover a new activity, adventure, or way to make today memorable and fun.",
                    'what-to-draw': "Out of drawing ideas? Spin for a fresh prompt and let your creativity flow with a new subject or theme every time.",
                    'what-to-watch-wheel': "Movie night dilemma? Spin to pick a film or show and make your next watch spontaneous, fun, and free from endless scrolling.",
                    'winner-wheel': "Need to choose a winner? Spin the wheel for a fair, exciting, and transparent way to celebrate someone special in your group or event.",
                    'win-or-lose': "Ready to test your luck? Spin the wheel and see if you win or lose—perfect for games, challenges, or adding suspense to any activity.",
                    'a-or-b': "Can't decide between two options? Spin for a quick, unbiased answer and move forward with confidence—no more overthinking!",
                    'activities-to-do-inside': "Looking for indoor fun? Spin the wheel and discover a new activity to brighten your day, whether you're solo or with friends and family.",
                    'does-he-love-me': "Wondering about your crush? Spin for a playful answer and add a little fun to your day—just remember, it's all in good spirit!",
                    'does-she-love-me': "Curious about her feelings? Spin for a lighthearted answer and enjoy the suspense—perfect for parties or just for fun.",
                    'dog-breed-selector': "Searching for the perfect dog breed? Spin to discover a new canine companion—great for future pet owners or just for fun.",
                    'aesthetics-masterlist': "Explore a world of aesthetics! Spin the wheel to discover new styles, trends, and creative inspiration for your next project, outfit, or mood board.",
                  };
                  return customIntros[template.id] || (template ? "Create and spin your own custom wheel for games, raffles, team picks, or any decision. Personalize options and enjoy a unique spinning experience." : "Create and spin your own custom wheel for any purpose. Personalize your options and enjoy a unique spinning experience every time.");
                })()}
              </p>
            </div>
            <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
              <div className="lg:col-span-2">
                <WheelContainer
                  segments={segments}
                  onSpin={() => {}}
                  isSpinning={isSpinning}
                  setIsSpinning={setIsSpinning}
                  title={template ? template.name : "Your Custom Wheel"}
                />
              </div>
              <div className="space-y-4 lg:space-y-6">
                <ControlPanel
                  segments={segments}
                  onAddSegment={(text, color) => setSegments(prev => [...prev, { id: Date.now().toString(), text, color, weight: 1 }])}
                  onUpdateSegment={(id, updates) => setSegments(prev => prev.map(s => s.id === id ? { ...s, ...updates } : s))}
                  onDeleteSegment={id => setSegments(prev => prev.filter(s => s.id !== id))}
                  setSegments={setSegments}
                  selectedTemplate={selectedTemplate}
                  setSelectedTemplate={setSelectedTemplate}
                />
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-16 bg-white/50 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 px-4">
                Find Your Next Adventure in 3 Easy Steps
              </h2>
              <p className="text-base sm:text-lg text-gray-600 px-4">
                Turn any moment into an exciting opportunity with our activity suggestions!
              </p>
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8">
              {howToSteps.map((step, idx) => (
                <div key={idx} className="text-center p-4 sm:p-6 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 sm:col-span-1 md:col-span-1">
                  <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center mx-auto mb-4 text-2xl">
                    {step.icon}
                  </div>
                  <h3 className="text-base sm:text-lg font-semibold mb-2">{step.title}</h3>
                  <p className="text-sm sm:text-base text-gray-600">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-white/50 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 px-4">
                Your Personal Activity Inspiration Tool
              </h2>
              <p className="text-base sm:text-lg text-gray-600 px-4">
                Discover why thousands of people trust our wheel to find their next exciting activity.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {features.map((feature, idx) => (
                <div key={idx} className="text-center p-4 sm:p-6 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center mx-auto mb-4 text-2xl">
                    {feature.icon}
                  </div>
                  <h3 className="text-base sm:text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm sm:text-base text-gray-600">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-16 bg-gradient-to-br from-indigo-50 to-purple-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 px-4">
                Perfect for Every Moment
              </h2>
              <p className="text-base sm:text-lg text-gray-600 px-4">
                Explore how our wheel can enhance different parts of your day:
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {useCases.map((useCase, idx) => (
                <div key={idx} className="bg-white p-4 sm:p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="text-4xl mb-4">{useCase.icon}</div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-3">{useCase.title}</h3>
                  <p className="text-sm sm:text-base text-gray-600">{useCase.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQs Section */}
        <section className="py-16 bg-gradient-to-br from-gray-50 to-gray-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2 px-4">
                FAQs
              </h2>
              <p className="text-sm sm:text-base text-gray-500 px-4">
                Quick answers to help you start your next amazing adventure!
              </p>
            </div>
            {/* Accordion FAQ */}
            {(() => {
              return (
                <div className="space-y-5">
                  {faqs.map((faq, idx) => (
                    <div
                      key={idx}
                      className={`transition-all duration-300 rounded-2xl shadow-lg bg-gradient-to-br from-white via-indigo-50 to-purple-50 border border-gray-100 group ${faqOpenIndex === idx ? 'ring-2 ring-indigo-400' : ''}`}
                    >
                      <button
                        className={`w-full flex items-center justify-between px-4 sm:px-7 py-4 sm:py-6 text-left rounded-2xl focus:outline-none transition-colors duration-200 ${faqOpenIndex === idx ? 'text-indigo-800 font-extrabold' : 'text-gray-900 font-bold'} group-hover:bg-indigo-50/40 hover:bg-indigo-50/60`}
                        onClick={() => setFaqOpenIndex(faqOpenIndex === idx ? -1 : idx)}
                        aria-expanded={faqOpenIndex === idx}
                        aria-controls={`faq-panel-${idx}`}
                      >
                        <h3 className="text-base sm:text-lg lg:text-xl flex-1 font-semibold pr-4">{faq.question}</h3>
                        <span className={`flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 rounded-full border-2 transition-all duration-300 shadow ${faqOpenIndex === idx ? 'bg-indigo-500 border-indigo-500 text-white scale-110' : 'bg-white border-indigo-200 text-indigo-500 scale-100'}`}
                        >
                          {faqOpenIndex === idx ? (
                            <svg width="18" height="18" className="sm:w-5 sm:h-5" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="9" x2="13" y2="9" /></svg>
                          ) : (
                            <svg width="18" height="18" className="sm:w-5 sm:h-5" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="9" y1="5" x2="9" y2="13" /><line x1="5" y1="9" x2="13" y2="9" /></svg>
                          )}
                        </span>
                      </button>
                      <div
                        id={`faq-panel-${idx}`}
                        className={`overflow-hidden transition-all duration-500 ease-in-out px-4 sm:px-7 ${faqOpenIndex === idx ? 'max-h-40 py-3 sm:py-4 opacity-100' : 'max-h-0 py-0 opacity-0'}`}
                        style={{
                          transitionProperty: 'max-height, opacity, padding',
                        }}
                      >
                        <div className={`pl-3 sm:pl-4 border-l-2 sm:border-l-4 transition-all duration-300 ${faqOpenIndex === idx ? 'border-indigo-400 bg-indigo-50/40' : 'border-transparent'}`}>
                          <p className="text-gray-700 text-sm sm:text-base lg:text-lg leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              );
            })()}
          </div>
        </section>
      </main>
    </div>
    </>
  );
};

export default CustomWheelPage;