import { ChatMessageProps } from "@/components/ui/chat";


export const chatMessages: ChatMessageProps[] = [
  { id: 1, text: "Hello! How can I help you today?", isAgent: true, time: "3:30 PM" },
  { id: 2, text: "Hi, I have an issue with my order.", isAgent: false, time: "3:31 PM" },
  { id: 3, text: "Sure, can you tell me your order ID?", isAgent: true, time: "3:31 PM" },
  { id: 4, text: "Yes, it’s #ORD-1023", isAgent: false, time: "3:32 PM" },
  { id: 5, text: "Thanks. Let me check that for you.", isAgent: true, time: "3:33 PM" },

  { id: 6, text: "Okay.", isAgent: false, time: "3:33 PM" },
  { id: 7, text: "I see the issue. Your order was delayed.", isAgent: true, time: "3:34 PM" },
  { id: 8, text: "When will it arrive?", isAgent: false, time: "3:34 PM" },
  { id: 9, text: "It should arrive by tomorrow evening.", isAgent: true, time: "3:35 PM" },
  { id: 10, text: "Alright, thanks.", isAgent: false, time: "3:36 PM" },

  { id: 11, text: "Is there anything else I can help with?", isAgent: true, time: "3:36 PM" },
  { id: 12, text: "Yes, can I change the delivery address?", isAgent: false, time: "3:37 PM" },
  { id: 13, text: "Unfortunately, it’s already shipped.", isAgent: true, time: "3:38 PM" },
  { id: 14, text: "Oh okay.", isAgent: false, time: "3:38 PM" },
  { id: 15, text: "You can update it for future orders.", isAgent: true, time: "3:39 PM" },

  { id: 16, text: "That helps.", isAgent: false, time: "3:39 PM" },
  { id: 17, text: "I’ll also apply a small discount.", isAgent: true, time: "3:40 PM" },
  { id: 18, text: "Thank you!", isAgent: false, time: "3:40 PM" },
  { id: 19, text: "You’re welcome 😊", isAgent: true, time: "3:41 PM" },
  { id: 20, text: "Have a great day.", isAgent: true, time: "3:41 PM" },

  { id: 21, text: "You too.", isAgent: false, time: "3:42 PM" },
  { id: 22, text: "Chat closed by user.", isAgent: false, time: "3:43 PM" },
  { id: 23, text: "Session archived.", isAgent: true, time: "3:44 PM" },
  { id: 24, text: "—", isAgent: false, time: "3:44 PM" },
  { id: 25, text: "—", isAgent: true, time: "3:44 PM" },

  { id: 26, text: "Reopening chat…", isAgent: false, time: "3:50 PM" },
  { id: 27, text: "Hi again!", isAgent: false, time: "3:51 PM" },
  { id: 28, text: "Welcome back. How can I help?", isAgent: true, time: "3:51 PM" },
  { id: 29, text: "Just checking status.", isAgent: false, time: "3:52 PM" },
  { id: 30, text: "Everything is on track 👍", isAgent: true, time: "3:53 PM" },
]
