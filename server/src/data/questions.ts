export const TOTAL_QUESTIONS = 10;
export const BASE_TRUST_SCORE = 50;
export const BASE_TIME = 200;

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
      "It’s Thursday evening, and the Deputy Treasurer from “The Company” requests a list of accounts and balances in 6 key markets (3 in Europe: UK, Ireland, Netherlands, and 3 in Asia: Hong Kong, Singapore, Australia). They’re reviewing partners.",
    options: [
      {
        option: "A",
        optionText:
          "Reach out to each respective local Sales Manager in Europe & Asia to obtain balances.",
        timeCost: 24,
        trustShift: -6,
        choise: ChoiceTypes.SUB_OPTIMAL,
        scenarioEndPopup:null,
        
      },
      {
        option: "B",
        optionText:
          "Go into Insights to quickly extract balances for the 6 markets.",
        timeCost: 0.3,
        trustShift: 8,
        choise: ChoiceTypes.OPTIMAL,
        scenarioEndPopup:null,
      },
    ],
  },
  {
    id: "1A",
    question:
      "Next day arrives. Europe data is incomplete, HK & SG responded, Aussie manager is busy. Partial info only. Ms. Tan is awaiting your next step.",
    options: [
      {
        option: "A",
        optionText:
          "Send Ms. Tan what you have, clarifying European data is incomplete and remaining data arrives in 2 days.",
        timeCost: 48,
        trustShift: -6,
        choise: ChoiceTypes.SUB_OPTIMAL,
        scenarioEndPopup:
          "You do provide immediate partial data, so Ms. Tan is not displeased, but she notices a 2-day gap for the Aussie piece. The trust score is affected.",
      },
      {
        option: "B",
        optionText:
          "Ask your Service Manager to use Insights to pull out Australia numbers",
        timeCost: 1,
        trustShift: 1,
        choise: ChoiceTypes.ACCEPTABLE,
        scenarioEndPopup:
          "Realizing the local sales managers are slow, you pivot to the Service Manager for help retrieving the data. Your quick thinking boosts the Trust score, though one might ask, “Why didn’t you use Insights yourself?”",
      },
    ],
  },
  {
    id: "1B",
    question:
      "You used Insights for 6 markets. Ms. Tan is thrilled, but she forgot to mention the need for balances for <b>Indian entity</b> also. You’re traveling, back only in the evening. India is 12 hours off your time zone. What do you do?",
    options: [
      {
        option: "A",
        optionText:
          "Call Local Sales Manager 'Your Friend' in India, to get a quick but possibly unverified. Response",
        timeCost: 0.1,
        trustShift: -6,
        choise: ChoiceTypes.SUB_OPTIMAL,
        scenarioEndPopup:
          "Leveraging your network can be an excellent approach, but how do you confirm if your contact is still in the system? How do you verify the data’s source? Also, wouldn’t sending screenshots risk a security breach?",
      },
      {
        option: "B",
        optionText:
          "You inform Ms. Tan you’ll share data in 6 hours, sending a polite holding reply (DIY Insights).",
        timeCost: 6,
        trustShift: 4,
        choise: ChoiceTypes.OPTIMAL,
        scenarioEndPopup:
          "She’s willing to wait for half a day, so trust remains unchanged under this arrangement.",
      },
    ],
  },

  // Scenario 2
  {
    id: "2",
    question:
      "While <b>“The Company”</b> is implementing a new TMS, they consider an acquisition funded by yen. Ms. Tan needs the yen balance in their US-based yen account.",
    options: [
      {
        option: "A",
        optionText: "“Log into Insights” to retrieve data and share",
        timeCost: 0.1,
        trustShift: 5,
        choise: ChoiceTypes.OPTIMAL,
        scenarioEndPopup:null,
      },
      {
        option: "B",
        optionText:
          "You email a local Relaionship Manager to ask for help (You also want to build repo with him).",
        timeCost: 24,
        trustShift: -6,
        choise: ChoiceTypes.SUB_OPTIMAL,
        scenarioEndPopup:null,
      },
    ],
  },
  {
    id: "2A",
    question:
      "Ms. Tan is super impressed; no final decision yet, but wants daily yen balances for 7 days.",
    options: [
      {
        option: "A",
        optionText: "Take Charge -  “Use Insights + Set Up Net Banking” ",
        timeCost: 2,
        trustShift: 6,
        choise: ChoiceTypes.OPTIMAL,
        scenarioEndPopup:
          "Ms. Tan values your immediate support and the potential for future self-service. Remember that Insights might only provide data up to T-2, so clarify this with her and encourage using Net Banking for more direct access.",
      },
      {
        option: "B",
        optionText:
          "Take help of local Relationship Manager for 7 Days and advise Ms Tan of the time difference. ",
        timeCost: 24,
        trustShift: 0,
        choise: ChoiceTypes.ACCEPTABLE,
        scenarioEndPopup:
          "Ms. Tan questions why you switched to a slower approach. Emphasize the benefits of Net Banking and its real-time balance visibility to justify a more efficient solution.",
      },
    ],
  },
  {
    id: "2B",
    question:
      "The local RM passed on the work to the support team. Ms. Tan grows uneasy. How do you fix it?",
    options: [
      {
        option: "A",
        optionText: "Rush Request to Client Service to lead the conversation.",
        timeCost: 6,
        trustShift: -1,
        choise: ChoiceTypes.ACCEPTABLE,
        scenarioEndPopup:
          "Ms. Tan receives routine updates but occasionally notices communication delays.",
      },
      {
        option: "B",
        optionText:
          "Escalate to Liquidity Team for their support, You still be the face",
        timeCost: 24,
        trustShift: -6,
        choise: ChoiceTypes.SUB_OPTIMAL,
        scenarioEndPopup:
          "Too many intermediaries can cause further delays, fueling Ms. Tan’s impatience and reducing trust score.",
      },
    ],
  },

  //   Scenario 3

  {
    id: "3",
    question:
      "You’ve just been assigned to ‘Company Z,’ a group entity of ‘The Company’ that was formerly managed by a Sales Manager who recently left. Ms. Tan mentions a prior discussion about routing 2,000 additional wires (MT103) from the US to the UK at the current price point. Since you’re unfamiliar with this entity’s wire pricing, Ms. Tan expects a swift solution.",
    options: [
      {
        option: "A",
        optionText: "Check the Sales Manager's Inbox or ask the line manager",
        timeCost: 6,
        trustShift: -3,
        choise: ChoiceTypes.SUB_OPTIMAL,
        scenarioEndPopup:null,
      },
      {
        option: "B",
        optionText:
          "Use Insights - Pull the wire pricing for that entity from Insights.",
        timeCost: 1,
        trustShift: 4,
        choise: ChoiceTypes.OPTIMAL,
        scenarioEndPopup:null,
      },
    ],
  },
  {
    id: "3A",
    question:
      "You used 6 hours rummaging. By 8 PM, you still lack wire pricing. Ms. Tan’s patience is wearing thin. You must pick a fresh approach quickly.",
    options: [
      {
        option: "A",
        optionText:
          "Seek help from Local Billing team and respond to Ms Tan (you have ensured to give details of both the group) ",
        timeCost: 6,
        trustShift: 1,
        choise: ChoiceTypes.ACCEPTABLE,
        scenarioEndPopup:
          "Another delay might have swayed the decision in Alpha Bank’s favor.",
      },
      {
        option: "B",
        optionText:
          "You reached out to Local Billing team and they advised to seek product sign off since you missed sharing revenue details from the overall relationship. ",
        timeCost: 12,
        trustShift: -5,
        choise: ChoiceTypes.SUB_OPTIMAL,
        scenarioEndPopup:
          "Ms. Tan dislikes any delay, yet you need more time, and Alpha Bank’s influence keeps growing. What else could you have done to retain Ms. Tan’s confidence?",
      },
    ],
  },
  {
    id: "3B",
    question:
      "You realize Insights can help, but you’re struggling to navigate the system effectively.",
    options: [
      {
        option: "A",
        optionText:
          "Go back to the local billing team, explain the situation clearly, and request their assistance.",
        timeCost: 24,
        trustShift: 1,
        choise: ChoiceTypes.ACCEPTABLE,
        scenarioEndPopup:
          "You salvaged the situation this time, but what if the same issue arises again?",
      },
      {
        option: "B",
        optionText:
          "Alternatively, consult the appropriate subject-matter expert or take the initiative to handle it yourself.",
        timeCost: 2,
        trustShift: 4,
        choise: ChoiceTypes.OPTIMAL,
        scenarioEndPopup:
          "Devoting extra time to mastering Insights can boost your productivity, ultimately strengthening client trust through timely solutions.",
      },
    ],
  },

  //   Scenario 4

  {
    id: "4",
    question:
      "You’ve just been assigned to ‘Company Z,’ a group entity of ‘The Company’ that was formerly managed by a Sales Manager who recently left. Ms. Tan mentions a prior discussion about routing 2,000 additional wires (MT103) from the US to the UK at the current price point. Since you’re unfamiliar with this entity’s wire pricing, Ms. Tan expects a swift solution.",
    options: [
      {
        option: "A",
        optionText:
          "Check the Sales Manager's Inbox or ask the line manager for previous approvals",
        timeCost: 6,
        trustShift: -3,
        choise: ChoiceTypes.SUB_OPTIMAL,
        scenarioEndPopup:null,
      },
      {
        option: "B",
        optionText:
          "Use Insights - Pull the wire pricing for that entity from Insights.",
        timeCost: 1,
        trustShift: 4,
        choise: ChoiceTypes.OPTIMAL,
        scenarioEndPopup:null,
      },
    ],
  },
  {
    id: "4A",
    question:
      "You used 6 hours rummaging. By 8 PM, you still lack wire pricing. Ms. Tan’s patience is wearing thin. You must pick a fresh approach quickly.",
    options: [
      {
        option: "A",
        optionText:
          "Seek help from Local Billing team and respond to Ms Tan (you have ensured to give details of both the group) ",
        timeCost: 6,
        trustShift: 1,
        choise: ChoiceTypes.ACCEPTABLE,
        scenarioEndPopup:
          "Another delay might have swayed the decision in Alpha Bank’s favor.",
      },
      {
        option: "B",
        optionText:
          "You reached out to Local Billing team and they advised to seek product sign off since you missed sharing revenue details from the overall relationship. ",
        timeCost: 12,
        trustShift: -5,
        choise: ChoiceTypes.SUB_OPTIMAL,
        scenarioEndPopup:
          "Ms. Tan dislikes any delay, yet you need more time, and Alpha Bank’s influence keeps growing. What else could you have done to retain Ms. Tan’s confidence?",
      },
    ],
  },
  {
    id: "4B",
    question:
      "You realize Insights can help, but you’re struggling to navigate the system effectively.",
    options: [
      {
        option: "A",
        optionText:
          "Go back to the local billing team, explain the situation clearly, and request their assistance.",
        timeCost: 24,
        trustShift: 1,
        choise: ChoiceTypes.ACCEPTABLE,
        scenarioEndPopup: "Some time, more heads, may mean more delay.",
      },
      {
        option: "B",
        optionText:
          "Alternatively, consult the appropriate subject-matter expert or take the initiative to handle it yourself.",
        timeCost: 2,
        trustShift: 4,
        choise: ChoiceTypes.OPTIMAL,
        scenarioEndPopup:
          "Devoting extra time to mastering Insights can boost your productivity, ultimately strengthening client trust.",
      },
    ],
  },

  //   Scenario 5

  {
    id: "5",
    question:
      "You are getting comfortable with Insights and have discovered that SGD has 15 million. You fear this might move away. What should be your next move, considering Alpha Bank is seizing every opportunity?",
    options: [
      {
        option: "A",
        optionText:
          "Dive deeper into Insights, reviewing the balances over a specific period and discussing any findings with the local Sales Manager. ",
        timeCost: 6,
        trustShift: 2,
        choise: ChoiceTypes.OPTIMAL,
        scenarioEndPopup:null,
      },
      {
        option: "B",
        optionText:
          "Email Ms. Tan to understand the reason for the large balances and learn what she plans to do next.",
        timeCost: 0.1,
        trustShift: -2,
        choise: ChoiceTypes.SUB_OPTIMAL,
        scenarioEndPopup:null,
      },
    ],
  },
  {
    id: "5A",
    question:
      "After facing some resistance from the local sales manager, you realize that it is in the client's best interest to suggest investing their surplus balances. What do you do?",
    options: [
      {
        option: "A",
        optionText:
          "Use Insights, prepare a comparative chart of balances, and suggest a few investment options in consultation with the local sales manager. This could lead to significant revenue dip",
        timeCost: 2,
        trustShift: 8,
        choise: ChoiceTypes.OPTIMAL,
        scenarioEndPopup:
          "Devoting extra time to mastering Insights can boost your productivity, ultimately strengthening client trust.",
      },
      {
        option: "B",
        optionText:
          "Keep a watch on the balance situation on Insights, but don’t bring it up unless Ms. Tan mentions it. ",
        timeCost: 18,
        trustShift: 0,
        choise: ChoiceTypes.ACCEPTABLE,
        scenarioEndPopup:
          "Devoting extra time to mastering Insights can boost your productivity, ultimately strengthening client trust.",
      },
    ],
  },
  {
    id: "5B",
    question:
      "Ms. Tan, thank you for pointing it out. However, at the same time, request a detailed analysis of all accounts globally to reassess the treasury position. What should you do?",
    options: [
      {
        option: "A",
        optionText:
          "Use Insights to pull historical and current balances, then share a quick summary report.",
        timeCost: 8,
        trustShift: 6,
        choise: ChoiceTypes.OPTIMAL,
        scenarioEndPopup:
          "Devoting extra time to mastering Insights can boost your productivity, ultimately strengthening client trust.",
      },
      {
        option: "B",
        optionText:
          "Request the Customer Service Manager to share the details and ask for a three-day timeline due to workload.",
        timeCost: 12,
        trustShift: 1,
        choise: ChoiceTypes.ACCEPTABLE,
        scenarioEndPopup:
          "Devoting extra time to mastering Insights can boost your productivity, ultimately strengthening client trust.",
      },
    ],
  },
];

export const quickOmniaQuestions = [
  {
    quesId: "1",
    question:
      "Why is Insights not your first choice?",
    options: [
      {
        option: "A",
        optionText: "Tried it, but not a fan of the navigation.",
      },
      {
        option: "B",
        optionText:
          "Prefer the old-school network of friends and colleagues.",
      },
      {
        option: "C",
        optionText:
          "Not familiar with the tool.",
      },
    ],
  },
];
