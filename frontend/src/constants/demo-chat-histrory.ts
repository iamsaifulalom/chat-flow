import { ChatMessageProps } from "@/components/ui/chat";


export const chatMessages: ChatMessageProps[] = [
  { id: 1, text: "Hello! How can I help you today?", isAdmin: true, time: "3:30 PM" },
  { id: 2, text: "Hi, I have an issue with my order.", isAdmin: false, time: "3:31 PM" },
  { id: 3, text: "Sure, can you tell me your order ID?", isAdmin: true, time: "3:31 PM" },
  { id: 4, text: "Yes, it’s #ORD-1023", isAdmin: false, time: "3:32 PM" },
  { id: 5, text: "Thanks. Let me check that for you.", isAdmin: true, time: "3:33 PM" },

  { id: 6, text: "Okay.", isAdmin: false, time: "3:33 PM" },
  { id: 7, text: "I see the issue. Your order was delayed.", isAdmin: true, time: "3:34 PM" },
  { id: 8, text: "When will it arrive?", isAdmin: false, time: "3:34 PM" },
  { id: 9, text: "It should arrive by tomorrow evening.", isAdmin: true, time: "3:35 PM" },
  { id: 10, text: "Alright, thanks.", isAdmin: false, time: "3:36 PM" },

  { id: 11, text: "Is there anything else I can help with?", isAdmin: true, time: "3:36 PM" },
  { id: 12, text: "Yes, can I change the delivery address?", isAdmin: false, time: "3:37 PM" },
  { id: 13, text: "Unfortunately, it’s already shipped.", isAdmin: true, time: "3:38 PM" },
  { id: 14, text: "Oh okay.", isAdmin: false, time: "3:38 PM" },
  { id: 15, text: "You can update it for future orders.", isAdmin: true, time: "3:39 PM" },

  { id: 16, text: "That helps.", isAdmin: false, time: "3:39 PM" },
  { id: 17, text: "I’ll also apply a small discount.", isAdmin: true, time: "3:40 PM" },
  { id: 18, text: "Thank you!", isAdmin: false, time: "3:40 PM" },
  { id: 19, text: "You’re welcome 😊", isAdmin: true, time: "3:41 PM" },
  { id: 20, text: "Have a great day.", isAdmin: true, time: "3:41 PM" },

  { id: 21, text: "You too.", isAdmin: false, time: "3:42 PM" },
  { id: 22, text: "Chat closed by user.", isAdmin: false, time: "3:43 PM" },
  { id: 23, text: "Session archived.", isAdmin: true, time: "3:44 PM" },
  { id: 24, text: "—", isAdmin: false, time: "3:44 PM" },
  { id: 25, text: "—", isAdmin: true, time: "3:44 PM" },

  { id: 26, text: "Reopening chat…", isAdmin: false, time: "3:50 PM" },
  { id: 27, text: "Hi again!", isAdmin: false, time: "3:51 PM" },
  { id: 28, text: "Welcome back. How can I help?", isAdmin: true, time: "3:51 PM" },
  { id: 29, text: "Just checking status.", isAdmin: false, time: "3:52 PM" },
  { id: 30, text: "Everything is on track 👍", isAdmin: true, time: "3:53 PM" },
]
