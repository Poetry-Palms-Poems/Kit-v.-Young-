// KIT v. Young — practice questions from the bench (petitioner side).
// Level: 1 = law student judge, 2 = practicing attorney / professor, 3 = sitting judge.
// Talking points are prompts for YOUR answer. Verify every cite against your case packet.

window.CATEGORIES = {
  open: "Opening, posture & framework",
  pc: "Argument 1: Public concern",
  pb: "Argument 2: Disruption & balancing",
  ft: "Facts & record",
  gr: "Garcetti, precedent & other cases",
  pol: "Public policy",
  cl: "Remedy, closing & curveballs"
};

window.LEVELS = {
  1: "Law student",
  2: "Attorney / professor",
  3: "Judge"
};

const RAW = {
  open: [
    [1, "Counsel, what is the issue before this Court and what outcome are you asking for?", "Whether non-renewing Young's contract violated the First Amendment. Ask: reverse the Court of Appeals, reinstate the District Court's judgment that the nonrenewal was constitutional."],
    [1, "What did the District Court hold, and what did the Court of Appeals do with it?", "District Court: speech not protected, nonrenewal constitutional. Court of Appeals (divided): speech protected, KIT's interests did not outweigh it, unconstitutional, remanded the retaliation claim."],
    [1, "Walk me through the legal framework for a public employee's speech claim.", "Garcetti's two inquiries: (1) citizen speaking on a matter of public concern? (2) if yes, Pickering balancing of employee's interest against the State's interest in efficient public services. Connick supplies the public-concern test."],
    [1, "Is Mr. Young a public employee, and why does that matter?", "KIT is a public university. Government as employer has broader powers than as sovereign (Garcetti, quoting Waters), but employees keep citizen rights (Pickering, Keyishian)."],
    [2, "Which side bears the burden at each stage?", "Employee must show protected speech and that it was a substantial factor. At balancing, the employer's burden varies with the nature of the speech (Connick; Fenico). Be careful to say what you can and cannot support from the packet."],
    [2, "You argue 'minimal' public concern. Why not argue there is no public concern at all?", "Race is inherently of public concern (Connick n.8, quoted in Fenico). Conceding it builds credibility; Fenico treats public concern as a sliding scale, not a threshold."],
    [2, "Aren't your two arguments really one argument: that the balance favors KIT?", "They are linked: the weight of the speech (arg. 1) sets how much disruption KIT must show (arg. 2). Keep them distinct but connected."],
    [2, "Is the protected status of speech a question of law or fact, and does that change how we review this?", "Fenico/Hill: a question of law that still needs a robust factual basis. Here the record is developed and the District Court ruled for KIT."],
    [3, "The Court of Appeals remanded for further proceedings. Why should this Court decide the matter now?", "Be ready to explain that the record already shows content, form, context and disruption facts. Contrast Fenico, where a thin pleading-stage record required remand."],
    [3, "Suppose we reject your public-concern argument. Do you still win?", "Yes, at Pickering balancing. Even if the speech carries more public concern, KIT shows documented effects on students and faculty. Acknowledge Connick's 'stronger showing' caveat and answer it with the record."],
    [3, "What is the narrowest ruling you would ask this Court to make?", "Fact-bound: on this record, speech with this content, form and context, plus documented disruption, does not outweigh KIT's interest. Avoid asking for a sweeping rule."],
    [2, "Does it matter which reason KIT gave for the nonrenewal?", "The nonrenewal letter cited non-disclosure of Think Right, cancelling ten classes and falsely claiming illness, and unresponsiveness to emails. Prepare for a pretext attack and know the timeline."]
  ],

  pc: [
    [1, "What is a 'matter of public concern', and who decides?", "Connick: content, form and context of the statement, as revealed by the whole record. Speech relating to a political, social or other concern to the community. Ultimately a question of law."],
    [1, "You concede race is a matter of public concern. Doesn't that end the inquiry?", "No. Public concern is a matter of degree (Fenico, citing Connick and Munroe). A public topic does not give every statement on it the same weight."],
    [1, "What is the 'content' of Mr. Young's speech, and why is its contribution to public debate minimal?", "Essay: racial equality a 'left-wing myth'; genetic 'natural mentality' for philosophy in European people; genetic engineering to restore 'Aryan genes'. Assertion of inherent genetic hierarchy, not comment on a pending public question."],
    [1, "What is the 'form' of the speech?", "Essay on the Think Right website, conference talks, plus the secretly recorded pub conversation that appeared in the Times. Be precise about which is which."],
    [1, "What is the 'context' of the speech?", "Off-campus; Young never discussed these views with students, colleagues or administrators; not tied to any pending policy question or disclosure of wrongdoing."],
    [2, "Isn't it Mr. Young's viewpoint, not the content of his speech, that you object to?", "No. Fenico: the 'inappropriate or controversial nature' of speech is irrelevant to public concern and matters only at balancing. Your test looks at what the speech contributes, not whether ideas are repugnant."],
    [2, "How is your approach different from punishing offensive speech?", "Offensiveness is not the measure. Contribution to public debate, form and context are. Be ready for Hernandez/Fenico language: distaste alone does not strip protection."],
    [2, "Snyder v. Phelps protected deeply offensive speech on public issues. Why doesn't it control?", "Snyder is cited in Fenico. Distinguish: Snyder involved a private citizen and no employer interest; this case is about weight at Pickering balancing, where the employer's interest enters. Verify before arguing."],
    [2, "Rankin says the controversial character of a statement is irrelevant to public concern. Are you relying on it being offensive?", "No. Concede the principle (Rankin is quoted in Fenico) and say you rely on content, form and context."],
    [2, "Pickering protected speech that was partly false. Is the truth of Young's claims relevant here?", "Avoid arguing falsity. Pickering involved criticism of public funding decisions that voters were deciding. Distinguish on subject and contribution, not on whether the claims are true."],
    [2, "Mr. Young says debate about race and genetics is classic public debate. What is your response?", "Concede the topic. Distinguish a topic from a statement's actual contribution; Connick looked at whether the speaker sought to inform the public or bring wrongdoing to light."],
    [3, "Where in Connick or Fenico do I find support for measuring a statement by its 'contribution to public debate'?", "Connick (Myers did not seek to inform the public of wrongdoing; 'most limited sense'); Fenico (matter of degree, sliding scale). Be candid that your framing applies those cases."],
    [3, "Is 'minimal public concern' a legal category or just a label you invented?", "Connick: public concern in 'only a most limited sense'. Fenico/Munroe: a sliding scale in which required disruption is proportional to the importance of the speech."],
    [2, "The pub conversation was recorded without Young's knowledge. Do you rely on it?", "Treat with care: Young assumed the recording had stopped. Rest your argument on the essay and conference remarks; the recording is context only."],
    [2, "Why does it matter that Young never raised these views on campus?", "It goes to context: no effort to engage the community or contribute to a campus debate. Expect pushback that employees have no duty to raise views internally first."],
    [3, "Doesn't speaking off-campus as a private person favor Young, not KIT?", "Concede he spoke as a citizen (Garcetti step one). Off-campus status does not decide the weight of the speech or the extent of disruption."],
    [2, "The Times published his conference remarks. Doesn't media interest show public concern?", "Media attention shows the controversy, not the speech's contribution. Be careful: you do not want to argue that publicity reduces protection."],
    [3, "How does Young's speech differ from Pickering's letter?", "Pickering: criticism of the Board's spending during a tax proposal, matter voters were deciding, no effect shown. Young: an assertion of genetic hierarchy; documented effects on students and faculty."],
    [3, "Should I evaluate each statement separately or the speech as a whole?", "Fenico: assess degree officer-by-officer, even post-by-post. Connick separated one questionnaire question from the rest. Offer to analyze essay, conference remarks and recording separately."],
    [2, "He said liberalism, democracy and universal human rights are 'ill-conceived and bankrupt'. Isn't that core political speech?", "Your hardest public-concern fact. Concede it is political commentary, argue it is general ideology tied to no pending question, and pivot to how the weight lowers KIT's burden while the disruption evidence carries your case."],
    [3, "If the speech has 'some' public concern, what is the practical effect of calling it minimal?", "KIT's required showing of disruption is lower (Fenico sliding scale). Connick says a stronger showing may be needed only if speech more substantially involves public concern."],
    [2, "Wouldn't your rule let any employer punish unpopular speech by calling it low-value?", "No: the test is content, form and context, applied to a developed record, and the employer must still show real disruption with record support."]
  ],

  pb: [
    [1, "State the Pickering balancing test.", "Balance the employee's interest, as a citizen, in commenting on matters of public concern against the State's interest, as an employer, in promoting the efficiency of the public services it performs through its employees."],
    [1, "What factors have the Court looked to when balancing?", "Close working relationships, interference with duties or regular operations, evidence of actual or likely effect, and manner, time and place of the speech (Pickering, Connick, Givhan)."],
    [1, "What evidence of disruption does KIT have?", "50+ calls and emails; President's and department head's emails; Biology, History and Faculty Board statements; student dropped Young's class; parent concerns; paid-leave letter citing 'significant disruption'."],
    [2, "Pickering faulted the Board for presenting no evidence of effect. How is this record different?", "Here there is concrete evidence. Pickering: no evidence at the hearing of effect on the community or the schools."],
    [2, "Does KIT have to show actual disruption, or is a reasonable prediction enough?", "Connick: an employer need not let disruption become 'manifest' before acting. Waters (via Fenico): substantial weight to reasonable predictions. Employer still needs record support."],
    [2, "Fenico requires more than 'unadorned speculation'. Why isn't KIT's evidence speculation?", "Point to documented items: counted calls/emails, named department statements, a student withdrawal, administrative responses. Contrast Fenico's pleading-stage record."],
    [2, "Isn't the complaint volume just public reaction to Young's views, a heckler's veto?", "Frame harm as effect on teaching and the classroom environment, not disapproval. Locurto (discussed in Fenico) rejected heckler's veto concerns where speech undermines the employee's role. Be ready to distinguish police from university."],
    [3, "A university is a marketplace of ideas. Isn't tolerating offensive speech part of its mission?", "Agree, and say KIT's mission also includes a functioning learning environment for diverse students. KIT does not ask to restrict viewpoints; it asks for weight to its reasonable judgment."],
    [2, "Young is a philosophy lecturer who did not discuss these views in class. How did his speech affect his classroom duties?", "Candidly: effect on teaching is indirect: a student left his class and departments said it creates a hostile learning environment. Pair with the workplace-conduct facts."],
    [3, "Pickering found no showing that the speech impeded the teacher's daily duties. Is there such a showing here?", "Cite the student leaving the class, department statements about the learning environment, and the unrelated workplace grounds. Concede the record is thinner on classroom conduct itself."],
    [2, "Are faculty statements 'disruption', or just colleagues exercising their own speech?", "They show strained working relationships and departmental demand for termination. Connick: close working relationships warrant deference; Pickering: harmony among coworkers."],
    [2, "One student dropped the class. Is that enough?", "It is one fact in a larger record (calls, emails, departments, Faculty Board, parents). Do not oversell it."],
    [3, "How many of the 50+ communications came from members of the KIT community?", "Packet says 'over 50 calls and emails'; it does not break them down. Say so, and avoid claiming more than the record shows."],
    [2, "KIT's own President denounced Young's views. Didn't KIT create the disruption?", "Leadership responded to a public controversy it did not create. Pickering warned against equating the Board's interests with the school's; show your interest is institutional and evidenced by effects on students."],
    [3, "What investigation did KIT do before the nonrenewal?", "Paid leave and a planned investigation into university policies and State ethics requirements; second letter three weeks after the Times article. Know the sequence."],
    [2, "The leave letter cited disruption; the nonrenewal letter cited policy violations. Why the difference?", "Different stages. Disruption justified leave; the investigation found policy violations, which became the nonrenewal grounds. Expect a pretext argument and answer it with the timeline."],
    [3, "Is this a mixed-motive case, and would KIT have acted without the speech?", "Connick references Mt. Healthy. Argue the cancelled classes, false illness claim, non-disclosure and unresponsiveness independently justified nonrenewal. Admit timing invites scrutiny."],
    [2, "Does a policy actually require disclosure of association with Think Right?", "The letter says Young violated university policies and State ethics codes by not disclosing it. The packet doesn't give the policy text; do not invent its contents."],
    [2, "If nonrenewal rested on cancelled classes, why do we need First Amendment balancing at all?", "Because Young alleges retaliation for speech. Employer's legitimate reasons matter at balancing and causation. Connick: courts should not constitutionalize employee grievances."],
    [3, "How much deference does a public university deserve?", "Connick: wide deference where close working relationships are essential; Waters: reasonable predictions; Fenico: heavy deference especially to police. Acknowledge universities may warrant less than police."],
    [3, "Connick says a stronger showing may be needed if the speech substantially involves public concern. What if we find it does?", "Fallback: even then, the record shows concrete effects on students and faculty. Do not abandon the sliding-scale framing."],
    [2, "What is KIT's institutional interest in a 'diverse student body'?", "Maintaining a learning environment where students of all backgrounds can learn; part of the core educational mission. Tie to evidence: department statements, student dropping the class."],
    [3, "Doesn't an interest in avoiding offense swallow the rule?", "No. KIT's interest is operational: effect on teaching, working relationships and student access to a class, shown on the record."],
    [3, "At what point in time do we measure the balance: when KIT acted, or now?", "When KIT acted, on the information it reasonably had (Waters-style reasonableness). Be careful to cite only what the packet supports."]
  ],

  ft: [
    [1, "When was Mr. Young hired and what did he teach?", "Hired 2015 as a lecturer teaching undergraduate philosophy; contract renewed in 2016 and 2017. Say 'lecturer', not 'professor'."],
    [1, "What is Think Right?", "Online group Young formed to 'reach more people about his philosophy', centered on the belief that European cultures are the source of the world's greatest developments."],
    [1, "What does his essay say?", "'Redefining Race and Philosophy': racial equality is a 'left-wing myth'; European people have a genetic 'natural mentality' for philosophy; genetic engineering could restore 'Aryan genes'. Quote accurately."],
    [1, "How did Young's views become public?", "Essay on the Think Right website, conference talks, and a Times article that included conference video and the recorded pub comments."],
    [2, "Who was 'OG', and does it matter?", "A community member posing as a KIT graduate student, working with Unity Over Hate, who recorded Young. Young consented at first, then assumed the recording had stopped."],
    [2, "Should the Court consider comments recorded under false pretenses?", "Candidly, do not lean on them. They are context; your argument stands on the essay, conference remarks and the disruption evidence."],
    [1, "How did KIT respond in the first days?", "Day after the article: President emailed faculty and staff calling Young's statements 'antithetical' to core values; department head sent similar email; 50+ calls and emails."],
    [1, "What did the Biology and History departments and the Faculty Board say?", "Biology: beliefs 'produce a discriminatory and intimidating educational environment'. History: demanded termination, 'hostile learning environment for students of color'. Faculty Board: views 'morally repugnant'."],
    [2, "What did KIT's first letter to Young say?", "Six days after the article: paid leave, citing 'significant disruption' likely to continue, and a planned investigation of policy and State ethics violations."],
    [2, "What reasons did KIT give for non-renewal?", "Not disclosing Think Right, cancelling 10 classes in Spring last year and lying that it was illness, and being unresponsive to emails since he started."],
    [3, "How much time passed between the Times article and the nonrenewal?", "Six days to leave; three weeks to the nonrenewal letter. Expect Young to argue timing shows retaliation."],
    [2, "Did KIT ever raise the cancelled classes or unresponsiveness before the article?", "The packet doesn't say. Do not claim it did. Acknowledge the gap if asked."],
    [3, "Does the record contain Young's performance evaluations?", "Not in the packet. Say you rely on the facts in the record and avoid speculating."],
    [2, "What does the record not tell us that matters here?", "Examples: breakdown of the 50+ communications, enrollment effects beyond one student, Young's response to the policy charges. Know your gaps before the bench finds them."]
  ],

  gr: [
    [1, "Under Garcetti, was Mr. Young speaking as a citizen?", "Yes: off-campus speech on his own website and at conferences, not pursuant to official duties. Concede step one and move on."],
    [2, "Garcetti involved speech made pursuant to official duties. Does it even apply here?", "Use it for the two-step framework and its statement that restrictions must target speech with 'some potential to affect the entity's operations'."],
    [2, "Keyishian says public employment cannot be conditioned on unreasonable terms. Isn't that what happened here?", "Pickering quotes Keyishian. Respond: KIT conditioned nothing on his views; it acted on documented effects and workplace violations."],
    [2, "How does Connick help you and how does it hurt you?", "Helps: public concern by content, form, context; deference to employer judgment; no need to wait for disruption. Hurts: a stronger showing may be needed if the speech more substantially involves public concern, and Connick rejects treating public concern as a mere threshold."],
    [3, "Is Fenico binding on this Court?", "No: a Third Circuit decision; persuasive. Cite for the sliding scale and its record requirements. This Court's controlling authority is Pickering, Connick and Garcetti."],
    [3, "Fenico, citing Locurto, rejected heckler's veto concerns for police officers. Why does that help you or hurt you?", "Helps: disruption can be likely when employees' expression undermines trust. Hurts: police context differs from a lecturer. Distinguish on facts."],
    [2, "Rankin protects statements even if inappropriate. Doesn't that favor Young?", "Rankin is about whether speech is of public concern; controversial content does not remove it. You accept that and rely on weight and disruption."],
    [3, "Is a public university like a police department for deference purposes?", "Not identical. Fenico notes deference especially for police where discipline and esprit de corps are vital. Argue that teaching and close faculty working relationships also warrant deference."]
  ],

  pol: [
    [1, "Why does this case matter beyond these parties?", "Public universities must protect open debate and a functioning learning environment. The rule sets how institutions respond to employee speech."],
    [2, "Won't your rule chill professors and lecturers from speaking?", "Narrow: only speech of minimal public concern, with documented disruption. KIT does not ask the Court to restrict viewpoints."],
    [2, "What about scholars who research controversial topics for a living?", "Distinguish ordinary scholarship tied to a field and campus debate from this record. Be ready to say what facts would change your answer."],
    [3, "Where is the line? Could KIT fire a lecturer for an unpopular climate or economics view?", "Offer a principled line: public concern weight plus actual documented effects on teaching and working relationships. Avoid saying 'anything controversial'."],
    [2, "Doesn't the public have an interest in hearing employees' views (Garcetti, San Diego v. Roe)?", "Agree; that is why you concede race is a public concern. The balance depends on this speech's contribution and the evidenced effect."],
    [3, "Does a ruling for KIT mean any institution can fire an employee after public outrage?", "No: outrage alone is not enough; the employer needs record support for likely disruption (Fenico) and the weight of the speech matters."],
    [2, "Is public confidence in the institution a legitimate interest?", "Pickering and Connick refer to efficiency and effective service. Frame confidence as tied to students' ability to learn and public trust in classrooms, not reputation alone."],
    [2, "How do you reconcile academic freedom with your position?", "Concede academic freedom matters. KIT's concern is the effect on its operations, and Young's speech was not part of his teaching duties."],
    [3, "Would your rule be the same if the speech were left-wing?", "Yes. The test is content, form, context and disruption, not viewpoint. Say so directly."],
    [2, "How does your position stay viewpoint neutral?", "KIT's interest in learning environment and working relationships applies regardless of viewpoint; it acted on documented effects and workplace violations."]
  ],

  cl: [
    [1, "In one sentence, why should KIT win?", "Because Young's speech carries minimal public concern, and KIT's documented, reasonable interest in an effective learning environment outweighs it."],
    [1, "What exactly do you want this Court to do?", "Reverse the Madison Court of Appeals and reinstate the District Court's judgment that the nonrenewal was constitutional."],
    [2, "If we remand, what should the lower court examine?", "Weight of each statement (Fenico), the likelihood and evidence of disruption, and the independent workplace grounds for nonrenewal."],
    [2, "If we find for Young on public concern, what is your best fallback?", "Pickering balancing still favors KIT on this record; Connick lets employers act before disruption is manifest; workplace violations independently support the decision."],
    [3, "Your opponent says KIT should have disciplined only the workplace violations. Response?", "Mixed-motive framing: the violations independently justified nonrenewal, and balancing shows KIT's interest outweighed Young's. Be careful about the timeline."],
    [2, "Is there any set of facts under which Young would win?", "Yes: if the speech were more substantially of public concern and the employer could show only speculation about disruption. Naming this builds credibility."],
    [3, "What is the weakest point in your argument?", "Pick one honestly: effect on classroom teaching is indirect; timing of nonrenewal; or the 'ill-conceived and bankrupt' remark being core political speech. Have a response ready."],
    [2, "What is the strongest point in the other side's case?", "Likely: Fenico/Rankin say offensive content doesn't reduce public concern, and the disruption is a reaction to views (heckler's veto). Answer it, don't dodge it."],
    [1, "Summarize your argument in 30 seconds.", "Two points: minimal public concern, so KIT's showing is lower; and documented disruption to students, faculty and the educational mission outweighs Young's interest."],
    [3, "Does your rule depend on the speech being racist?", "No: it depends on the content, form and context of this speech and the evidence of disruption, not on a label."]
  ]
};

window.QUESTIONS = [];
let n = 0;
Object.keys(RAW).forEach(function (cat) {
  RAW[cat].forEach(function (r) {
    n += 1;
    window.QUESTIONS.push({ id: "q" + n, num: n, cat: cat, level: r[0], q: r[1], h: r[2] });
  });
});
