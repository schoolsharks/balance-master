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
      "<p>It’s <b>Thursday evening</b>, and the <b>Deputy Treasurer</b> from <b>“The Company”</b> requests a <b>list of accounts</b> and <b>balances</b> in <b>six key markets</b>—three in Europe: (UK/Ireland/Netherlands), and 3 in Asia: (Hong Kong/Singapore/Australia) and three in Asia (Hong Kong, Singapore, Australia). They’re reviewing their banking partners, and you sense Ms. Tan’s watchful eye. You want to impress her but also worry about next steps eating into your precious hours.</p>",
    options: [
      {
        option: "A",
        optionText:
          "Reach out to each respective <b>local Sales Manager</b> in Europe & Asia to obtain balances. You prefer local buy-in, but it’s not super quick.",
        timeCost: 24,
        trustShift: 2,
        choise: ChoiceTypes.ACCEPTABLE,
      },
      {
        option: "B",
        optionText:
          "Go into <b>Insights</b> to quickly extract balances for those 6 markets.",
        timeCost: 0.3,
        trustShift: 8,
        choise: ChoiceTypes.OPTIMAL,
      },
      {
        option: "C",
        optionText:
          "Search your inbox for <b>15-day-old</b> balance update and share that.",
        timeCost: 1,
        trustShift: -3,
        choise: ChoiceTypes.SUB_OPTIMAL,
      },
    ],
  },
  {
    id: "1A",
    question:
      "<p>It’s <b>the next day.</b> You’re anxious to see local Sales Managers’ responses from Europe, but the data is incomplete. Hong Kong and Singapore replied swiftly; however, the Australian Manager is busy and passed it to a colleague. You only have partial info. Ms. Tan’s follow-up email sits in your inbox, awaiting your best solution..</p>",
    options: [
      {
        option: "A",
        optionText: "Send Ms. Tan everything you have, clarifying the <b>European</b> numbers need more refinement and the <b>Australia</b> balance will come in 2 more days.",
        timeCost: 48,
        trustShift: 2,
        choise: ChoiceTypes.ACCEPTABLE,
      },
      {
        option: "B",
        optionText: "Postpone any reply until next week, once the Australian manager is back—3 days from now—for a fully consolidated single response.",
        timeCost: 72,
        trustShift: -13,
        choise: ChoiceTypes.SUB_OPTIMAL,
      },
      {
        option: "C",
        optionText: "Skip further local chasing. Pull the balances for all 6 markets from <b>Insights</b>",
        timeCost: 1,
        trustShift: 4,
        choise: ChoiceTypes.OPTIMAL,
      },
    ],
  },
  {
    id: "1B",
    question:
      "<p>You used <b>Insights</b> to retrieve data for the 6 requested markets swiftly. Ms. Tan’s thrilled response is almost audible. Then she follows up: They forgot to mention the balances for <b>an Indian entity</b> is needed. She needs that as well. But you’re <b>on the road</b> for a meeting, returning only in the <b>evening</b>. India is ~12 hours off your time zone.</p>",
    options: [
      {
        option: "A",
        optionText: "Spend few minutes calling your friend, a local sales manager in India for a quick, response.",
        timeCost: 10,
        trustShift: -3,
        choise: ChoiceTypes.SUB_OPTIMAL,
      },
      {
        option: "B",
        optionText: "Inform Ms. Tan you can’t access your system until 6 hours later, sending a polite holding note.",
        timeCost: 6,
        trustShift: 1,
        choise: ChoiceTypes.ACCEPTABLE,
      },
      {
        option: "C",
        optionText: "Ask your Service Team to reference Insights on your behalf, delivering the data in ~30 minutes.",
        timeCost: 0.5,
        trustShift: 5,
        choise: ChoiceTypes.OPTIMAL,
      },
    ],
  },
  {
    id: "1C",
    question:
      "<p>You responded with a 15-day-old balances email. Ms. Tan is in a hurry but quickly questions the data’s freshness. You realize some region’s balances might have changed significantly. This time you can’t be wrong. What do you do.</p>",
    options: [
      {
        option: "A",
        optionText: "You ask for three more days, share the out-of-date data, disclaiming it’s from 15 days ago.",
        timeCost: 0.5,
        trustShift: -9,
        choise: ChoiceTypes.SUB_OPTIMAL,
      },
      {
        option: "B",
        optionText: "Use Insights to pul real-time figures for those 4 markets, ensuring Ms. Tan gets accurate info.",
        timeCost: 1,
        trustShift: 5,
        choise: ChoiceTypes.OPTIMAL,
      },
      {
        option: "C",
        optionText: "Only re-verify the balances you’re “unsure of,” emailing local sales managers for help.",
        timeCost: 24,
        trustShift: -3,
        choise: ChoiceTypes.ACCEPTABLE,
      },
    ],
  },

  // Scenario 2
  {
    id: "2",
    question:
      "<p>While “The Company” implements a new Treasury Management System, Ms. Tan eyes a partial acquisition financed by cash + yen-denominated debt. She urgently needs to know the yen balance in their US-based yen account at your bank. Time is ticking; every hour spent searching can hamper her decision-making confidence.</p>",
    options: [
      {
        option: "A",
        optionText: "You use Insights for a near-instant yen balance from the US-based yen account.",
        timeCost: 0.2,
        trustShift: 10,
        choise: ChoiceTypes.OPTIMAL,
      },
      {
        option: "B",
        optionText: "You assign the Client Service Manager to gather the yen balance. o Time Cost: 6 hours",
        timeCost: 6,
        trustShift: 1,
        choise: ChoiceTypes.ACCEPTABLE,
      },
      {
        option: "C",
        optionText: "You email a local Relationship Manager for the yen balance, but they may need to check with other teams.",
        timeCost: 24,
        trustShift: -3,
        choise: ChoiceTypes.SUB_OPTIMAL,
      },
    ],
  },
  {
    id: "2A",
    question:
      "<p>Ms. Tan is impressed over your immediate yen-balance data. She still hasn’t finalized the acquisition but now requests daily yen-balance updates for 7 days. You feel the pressure of providing these on top of other tasks, mindful of your hour budget.</p>",
    options: [
      {
        option: "A",
        optionText: "Use Insights to share balances and suggest using Net Banking",
        timeCost: 8,
        trustShift: 8,
        choise: ChoiceTypes.OPTIMAL,
      },
      {
        option: "B",
        optionText: "Request Client Service for Daily Updates",
        timeCost: 24,
        trustShift: 1,
        choise: ChoiceTypes.ACCEPTABLE,
      },
      {
        option: "C",
        optionText: "Email Local Relationship Manager for 7 Days",
        timeCost: 72,
        trustShift: -3,
        choise: ChoiceTypes.SUB_OPTIMAL,
      },
    ],
  },
  {
    id: "2B",
    question:
      "<p>You receive the yen information from the Client Service Manager, repackage it for Ms. Tan. She’s still deciding but also demands 7 days of daily yen data.</p>",
    options: [
      {
        option: "A",
        optionText: "Use Insights to share balances and suggest using",
        timeCost: 8,
        trustShift: 8,
        choise: ChoiceTypes.OPTIMAL,
      },
      {
        option: "B",
        optionText: "Request Client Service for Daily Updates",
        timeCost: 24,
        trustShift: 1,
        choise: ChoiceTypes.ACCEPTABLE,
      },
      {
        option: "C",
        optionText: "Email Local Relationship Manager for 7 Days",
        timeCost: 72,
        trustShift: -3,
        choise: ChoiceTypes.SUB_OPTIMAL,
      },
    ],
  },
  {
    id: "2C",
    question:
      "<p>The local Relationship Manager you emailed doesn’t have the yen info on hand. Ms. Tan’s is frustrated with the misses. You need a new approach quickly, or watch trust slip further.</p>",
    options: [
      {
        option: "A",
        optionText: "Rush to Client Service team doe help",
        timeCost: 6,
        trustShift: 1,
        choise: ChoiceTypes.ACCEPTABLE,
      },
      {
        option: "B",
        optionText: "Use Insights Yourself",
        timeCost: 0.2,
        trustShift: +5,
        choise: ChoiceTypes.OPTIMAL,
      },
      {
        option: "C",
        optionText: "Escalate to Liquidity Team",
        timeCost: 24,
        trustShift: -5,
        choise: ChoiceTypes.SUB_OPTIMAL,
      },
    ],
  },

  //   Scenario 3

  {
    id: "3",
    question:
      "<p>Another group entity of “The Company” transferred under your coverage after their previous Sales Manager left. Ms. Tan references a discussion about international wire transfer pricing: this entity aims to send 2,000 additional wires (MT103) from the US to the UK at the current price point. You don’t yet know the entity’s existing wire pricing. Ms. Tan wants clarity soon, feeling the clock tick.</p>",
    options: [
      {
        option: "A",
        optionText: "Ask your local Billing Team to confirm the entity’s wire-transfer pricing.",
        timeCost: 8,
        trustShift: 3,
        choise: ChoiceTypes.ACCEPTABLE,
      },
      {
        option: "B",
        optionText:
          "Spend time digging old emails from the ex-Sales Manager, then ask your line manager if they recall the pricing.",
        timeCost: 6,
        trustShift: -6,
        choise: ChoiceTypes.SUB_OPTIMAL,
      },
      {
        option: "C",
        optionText: 'Go into Insights to find the wire pricing for that group entity.',
        timeCost: 1,
        trustShift: +5,
        choise: ChoiceTypes.OPTIMAL,
      },
    ],
  },
  {
    id: "3A",
    question:
      "<p>You approached Billing Team and got the wire pricing the next day. However, you didn’t share a broad relationship summary for Ms. Tan, and Billing suggests you get Product sign- off before finalizing the new wire price. Ms. Tan is waiting anxiously.</p>",
    options: [
      {
        option: "A",
         optionText: "Involve Client Service to co-ordinate with billing team",
        timeCost: 24,
        trustShift: -3,
        choise: ChoiceTypes.ACCEPTABLE,
      },
      {
        option: "B",
        optionText: "Use Insights and take a call based on both the Entities relationships",
        timeCost: 2,
        trustShift: 4,
        choise: ChoiceTypes.OPTIMAL,
      },
      {
        option: "C",
        optionText: "Escalate to Line Manager and by pass billing team’s suggestion for now.",
        timeCost: 6,
        trustShift: -5,
        choise: ChoiceTypes.SUB_OPTIMAL,
      },
    ],
  },
  {
    id: "3B",
    question:
      "<p>After 6 hours rummaging your inbox, it’s now 8 PM. You realize you still don’t have the correct wire pricing. Ms. Tan might be expecting an update tomorrow morning. Pressure is on.</p>",
    options: [
      {
        option: "A",
        optionText: "Reach out to Local Billing Team for help",
        timeCost: 6,
        trustShift: 1,
        choise: ChoiceTypes.ACCEPTABLE,
      },
      {
        option: "B",
        optionText: "Get back to Insights and do it yourself",
        timeCost: 2,
        trustShift: 4,
        choise: ChoiceTypes.OPTIMAL,
      },
      {
        option: "C",
        optionText: "Push to Client Service team and ask them to handle it",
        timeCost: 24,
        trustShift: -3,
        choise: ChoiceTypes.SUB_OPTIMAL,
      },
    ],
  },
  {
    id: "3C",
    question:
      "<p>You gather the wire pricing in about 1 hour, do some quick cost-value analysis for those 2,000 wires, and Ms. Tan is leaning toward immediate adoption. She still wants a final confirmation or a formal proposal.</p>",
    options: [
      {
        option: "A",
        optionText: "Share Formal Proposal",
        timeCost: 0.5,
        trustShift: +4,
        choise: ChoiceTypes.OPTIMAL,
      },
      {
        option: "B",
        optionText: "Wait out for Product Approval",
        timeCost: 6,
        trustShift: 1,
        choise: ChoiceTypes.ACCEPTABLE,
      },
      {
        option: "C",
        optionText: "Request for overall Relationship Review with Ms Tan, since it’s a new relationship",
        timeCost: 48,
        trustShift: -6,
        choise: ChoiceTypes.SUB_OPTIMAL,
      },
    ],
  },
];

export const quickOmniaQuestions = [
  {
    quesId: "1",
    question:
      "You’ve just been assigned to The Company, and on your second day...",
    options: [
      {
        option: "A",
        optionText: "Email Ms. Tan with a firm note: “Why wasn’t I informed?”",
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
