export const TOTAL_QUESTIONS = 6;
export const BASE_TRUST_SCORE = 50;
export const BASE_TIME = 100;

export enum ChoiceTypes {
  OPTIMAL = "OPTIMAL",
  ACCEPTABLE = "ACCEPTABLE",
  SUB_OPTIMAL = "SUB_OPTIMAL",
}

export const questions = [
  // Scenario 1
  {
    id: "1",
    question:
      "It’s Thursday evening, and the Deputy Treasurer from “The Company” requests a list of accounts and balances in 6 key markets (3 in Europe: UK/Ireland/Netherlands, and 3 in Asia: Hong Kong/Singapore/Australia). They’re reviewing banking partners.",
    options: [
      {
        option: "A",
        optionText:
          "Reach out to each local Sales Manager for those markets wanting local involvement.",
        timeCost: 50,
        trustShift: 0,
        choise: ChoiceTypes.ACCEPTABLE,
      },
      {
        option: "B",
        optionText:
          "Use Insights (reporting tool) to quickly extract balances for all 6 markets.",
        timeCost: 1,
        trustShift: 4,
        choise: ChoiceTypes.OPTIMAL,
      },
      {
        option: "C",
        optionText:
          "Search your inbox for 15-day-old balance data, share that.",
        timeCost: 2,
        trustShift: -3,
        choise: ChoiceTypes.SUB_OPTIMAL,
      },
    ],
  },
  {
    id: "1A",
    question:
      "Next day: Some Sales Managers in Europe responded with incomplete data; Hong Kong/Singapore are fine, but Australia is delayed. Ms. Tan is still waiting.",
    options: [
      {
        option: "A",
        optionText: "Share Partial Info",
        timeCost: 75,
        trustShift: 0,
        choise: ChoiceTypes.ACCEPTABLE,
      },
      {
        option: "B",
        optionText: "Wait to Consolidate",
        timeCost: 100,
        trustShift: -3,
        choise: ChoiceTypes.SUB_OPTIMAL,
      },
      {
        option: "C",
        optionText: "Use Insights",
        timeCost: 2,
        trustShift: 3,
        choise: ChoiceTypes.OPTIMAL,
      },
    ],
  },
  {
    id: "1B",
    question:
      "You used Insights (1 hour). Ms. Tan now asks for Indian entity balances too; you’re on the road, returning in about 6 “real” hours.",
    options: [
      {
        option: "A",
        optionText: "Call Local Manager Friend",
        timeCost: 0.5,
        trustShift: -3,
        choise: ChoiceTypes.SUB_OPTIMAL,
      },
      {
        option: "B",
        optionText: "Use Insights Later",
        timeCost: 12,
        trustShift: 0,
        choise: ChoiceTypes.ACCEPTABLE,
      },
      {
        option: "C",
        optionText: "Delegate to Service Team",
        timeCost: 1,
        trustShift: 3,
        choise: ChoiceTypes.OPTIMAL,
      },
    ],
  },
  {
    id: "1C",
    question:
      "You used Insights (1 hour). Ms. Tan now asks for Indian entity balances too; you’re on the road, returning in about 6 “real” hours.",
    options: [
      {
        option: "A",
        optionText: "Send Old Balances Anyway",
        timeCost: 1,
        trustShift: -3,
        choise: ChoiceTypes.SUB_OPTIMAL,
      },
      {
        option: "B",
        optionText: "Use Insights Now",
        timeCost: 2,
        trustShift: 3,
        choise: ChoiceTypes.OPTIMAL,
      },
      {
        option: "C",
        optionText: "Partially Re-check",
        timeCost: 50,
        trustShift: -3,
        choise: ChoiceTypes.ACCEPTABLE,
      },
    ],
  },

  // Scenario 2
  {
    id: "2",
    question:
      "“The Company” is implementing a Treasury Management System (TMS) and considering an acquisition funded by cash & debt in Japanese yen. Ms. Tan needs the current yen balance in their US-based yen account to decide quickly.",
    options: [
      {
        option: "A",
        optionText: "Log into Insights",
        timeCost: 0.5,
        trustShift: 3,
        choise: ChoiceTypes.OPTIMAL,
      },
      {
        option: "B",
        optionText: "Client Service Manager",
        timeCost: 12,
        trustShift: 0,
        choise: ChoiceTypes.ACCEPTABLE,
      },
      {
        option: "C",
        optionText: "Email Relationship Manager",
        timeCost: 50,
        trustShift: -3,
        choise: ChoiceTypes.SUB_OPTIMAL,
      },
    ],
  },
  {
    id: "2A",
    question:
      "Ms. Tan is impressed. She wants daily yen balances for 7 days until the final acquisition decision.",
    options: [
      {
        option: "A",
        optionText: "Use Insights + Set Up Net Banking",
        timeCost: 4,
        trustShift: 3,
        choise: ChoiceTypes.OPTIMAL,
      },
      {
        option: "B",
        optionText: "Client Service for Daily Updates",
        timeCost: 50,
        trustShift: 0,
        choise: ChoiceTypes.ACCEPTABLE,
      },
      {
        option: "C",
        optionText: "Email Local RM for Daily Info",
        timeCost: 75,
        trustShift: -3,
        choise: ChoiceTypes.SUB_OPTIMAL,
      },
    ],
  },
  {
    id: "2B",
    question:
      "You get the yen balance from Client Service in 12 hours, repackage it for Ms. Tan. She wants daily data for 7 days.",
    options: [
      {
        option: "A",
        optionText: "Use Insights + Net Banking",
        timeCost: 4,
        trustShift: 3,
        choise: ChoiceTypes.OPTIMAL,
      },
      {
        option: "B",
        optionText: "Client Service Daily",
        timeCost: 50,
        trustShift: 0,
        choise: ChoiceTypes.ACCEPTABLE,
      },
      {
        option: "C",
        optionText: "Email Local RM Daily",
        timeCost: 75,
        trustShift: -3,
        choise: ChoiceTypes.SUB_OPTIMAL,
      },
    ],
  },
  {
    id: "2C",
    question:
      "The local Relationship Manager has no yen info. Ms. Tan is waiting. Next step?",
    options: [
      {
        option: "A",
        optionText: "Rush Request to Client Service",
        timeCost: 12,
        trustShift: 0,
        choise: ChoiceTypes.ACCEPTABLE,
      },
      {
        option: "B",
        optionText: "Use Insights DIY",
        timeCost: 1,
        trustShift: +3,
        choise: ChoiceTypes.OPTIMAL,
      },
      {
        option: "C",
        optionText: "Escalate to Liquidity Team",
        timeCost: 50,
        trustShift: -3,
        choise: ChoiceTypes.SUB_OPTIMAL,
      },
    ],
  },

  //   Scenario 3

  {
    id: "3",
    question:
      "Another group entity newly under your coverage wants to route 2,000 additional wires (MT103) from the US to the UK at the current price. You don’t know the wire pricing. Ms. Tan wants a quick solution.",
    options: [
      {
        option: "A",
        optionText: "Ask the Billing Team for the latest wire-pricing details.",
        timeCost: 8,
        trustShift: 0,
        choise: ChoiceTypes.ACCEPTABLE,
      },
      {
        option: "B",
        optionText:
          "Dig through old emails from your ex-colleague, ask your line manager.",
        timeCost: 12,
        trustShift: -3,
        choise: ChoiceTypes.SUB_OPTIMAL,
      },
      {
        option: "C",
        optionText: "Use Insights to find the wire pricing for that entity.",
        timeCost: 2,
        trustShift: -3,
        choise: ChoiceTypes.OPTIMAL,
      },
    ],
  },
  {
    id: "3A",
    question:
      "You used the Billing Team approach (8 hours). They respond next day, but you neglected to provide a relationship summary. They advise Product approval before finalizing. Ms. Tan is waiting.",
    options: [
      {
        option: "A",
        optionText: "Summarize & Involve Client Service",
        timeCost: 50,
        trustShift: 0,
        choise: ChoiceTypes.ACCEPTABLE,
      },
      {
        option: "B",
        optionText: "Use Insights",
        timeCost: 4,
        trustShift: 3,
        choise: ChoiceTypes.OPTIMAL,
      },
      {
        option: "C",
        optionText: "Escalate to Line Manager",
        timeCost: 12,
        trustShift: -3,
        choise: ChoiceTypes.SUB_OPTIMAL,
      },
    ],
  },
  {
    id: "3B",
    question:
      "After 12 hours, by late evening you realize you still don’t have the correct pricing. Ms. Tan is waiting. You must pick a new step fast.",
    options: [
      {
        option: "A",
        optionText: "Local Billing Team",
        timeCost: 12,
        trustShift: 0,
        choise: ChoiceTypes.ACCEPTABLE,
      },
      {
        option: "B",
        optionText: "Insights",
        timeCost: 2,
        trustShift: 3,
        choise: ChoiceTypes.OPTIMAL,
      },
      {
        option: "C",
        optionText: "Client Service",
        timeCost: 50,
        trustShift: -3,
        choise: ChoiceTypes.SUB_OPTIMAL,
      },
    ],
  },
  {
    id: "3C",
    question:
      "Within 2 hours, you got the pricing, evaluated cost & business value. Ms. Tan wants your final approach to confirm the 2,000 wires at that rate.",
    options: [
      {
        option: "A",
        optionText: "Formal Proposal",
        timeCost: 1,
        trustShift: +3,
        choise: ChoiceTypes.OPTIMAL,
      },
      {
        option: "B",
        optionText: "Seek Product Approval",
        timeCost: 12,
        trustShift: 0,
        choise: ChoiceTypes.ACCEPTABLE,
      },
      {
        option: "C",
        optionText: "Request Full Relationship Review",
        timeCost: 75,
        trustShift: -3,
        choise: ChoiceTypes.SUB_OPTIMAL,
      },
    ],
  },
];

export const quickOmniaQuestions = [
  {
    quesId: "1",
    question:
      "You’ve just been assigned to GTS, and on your second day...",
    options: [
      {
        option: "A",
        optionText:
          "Email Ms. Tan with a firm note: “Why wasn’t I informed?”",
      },
      {
        option: "B",
        optionText:
          "Speak with international manager, identify possible large payments, compile thoughtful questions.",
      },
      {
        option: "C",
        optionText:
          "Wait until end of day to see if balances rebound or for Ms Tan to inform. ",
      },
    ],
  },
  {
    quesId: "2",
    question:
      "You’ve just been assigned to GTS, and on your second day...",
    options: [
      {
        option: "A",
        optionText:
          "Email Ms. Tan with a firm note: “Why wasn’t I informed?”",
      },
      {
        option: "B",
        optionText:
          "Speak with international manager, identify possible large payments, compile thoughtful questions.",
      },
      {
        option: "C",
        optionText:
          "Wait until end of day to see if balances rebound or for Ms Tan to inform. ",
      },
    ],
  },
  {
    quesId: "3",
    question:
      "You’ve just been assigned to GTS, and on your second day...",
    options: [
      {
        option: "A",
        optionText:
          "Email Ms. Tan with a firm note: “Why wasn’t I informed?”",
      },
      {
        option: "B",
        optionText:
          "Speak with international manager, identify possible large payments, compile thoughtful questions.",
      },
      {
        option: "C",
        optionText:
          "Wait until end of day to see if balances rebound or for Ms Tan to inform. ",
      },
    ],
  },
];
