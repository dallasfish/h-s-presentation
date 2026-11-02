export interface DictionaryEntry {
  word: string;
  phonetic?: string;
  partOfSpeech: string;
  easyDefinition: string;
  biblicalNote?: string;
  exampleSentence: string;
  isKeyTheologicalTerm?: boolean;
}

export const EASY_ENGLISH_DICTIONARY: Record<string, DictionaryEntry> = {
  christian: {
    word: 'Christian',
    phonetic: '/ˈkrɪs.tʃən/',
    partOfSpeech: 'noun',
    easyDefinition: 'A person who believes in and follows Jesus Christ, belonging to God\'s family.',
    biblicalNote: 'In the Bible, disciples were first called Christians in Antioch (Acts 11:26).',
    exampleSentence: 'As a Christian, Maria prays and trusts Jesus every day.',
    isKeyTheologicalTerm: true,
  },
  church: {
    word: 'Church',
    phonetic: '/tʃɜːrtʃ/',
    partOfSpeech: 'noun',
    easyDefinition: 'The community of all people who trust Jesus; not just a building, but God\'s living family.',
    biblicalNote: 'The Greek word "ekklesia" means a called-out gathering of God\'s people.',
    exampleSentence: 'The church gathers together to worship God and encourage one another.',
    isKeyTheologicalTerm: true,
  },
  kingdom: {
    word: 'Kingdom',
    phonetic: '/ˈkɪŋ.dəm/',
    partOfSpeech: 'noun',
    easyDefinition: 'The royal rule and realm of God where Jesus is King, filled with peace, justice, and love.',
    biblicalNote: 'Jesus preached: "The kingdom of God is at hand."',
    exampleSentence: 'In God\'s kingdom, the humble and kind receive true honor.',
    isKeyTheologicalTerm: true,
  },
  creator: {
    word: 'Creator',
    phonetic: '/kriˈeɪ.tər/',
    partOfSpeech: 'noun',
    easyDefinition: 'God who made the whole universe, the stars, earth, and every living thing out of nothing.',
    biblicalNote: 'Genesis 1:1 reveals God spoke everything into existence.',
    exampleSentence: 'God is the loving Creator of all people.',
    isKeyTheologicalTerm: true,
  },
  ancestors: {
    word: 'Ancestors',
    phonetic: '/ˈæn.ses.tərz/',
    partOfSpeech: 'noun',
    easyDefinition: 'The family members who lived long ago before us, like grandparents and great-grandparents.',
    biblicalNote: 'All human ancestors trace back to Adam and Eve created by God.',
    exampleSentence: 'Our ancestors passed down stories from generations past.',
  },
  humanity: {
    word: 'Humanity',
    phonetic: '/hjuːˈmæn.ə.ti/',
    partOfSpeech: 'noun',
    easyDefinition: 'All human beings everywhere in the world as one big human race.',
    biblicalNote: 'God created humanity in His own image and likeness.',
    exampleSentence: 'God showed His great love for all humanity by sending His Son.',
  },
  honor: {
    word: 'Honor',
    phonetic: '/ˈɒn.ər/',
    partOfSpeech: 'noun / verb',
    easyDefinition: 'High respect, high worth, and supreme praise given to someone; standing noble in God\'s eyes.',
    biblicalNote: 'In honor-shame cultures, honor is the highest treasure, and God gives true honor to His children.',
    exampleSentence: 'We honor God when we love and serve other people.',
    isKeyTheologicalTerm: true,
  },
  glory: {
    word: 'Glory',
    phonetic: '/ˈɡlɔː.ri/',
    partOfSpeech: 'noun',
    easyDefinition: 'The shining royal beauty, perfect greatness, and radiant presence of God.',
    biblicalNote: 'God\'s glory is the visible brilliance of His holiness and majesty.',
    exampleSentence: 'The heavens declare the glory and majesty of God.',
    isKeyTheologicalTerm: true,
  },
  heavens: {
    word: 'Heavens',
    phonetic: '/ˈhev.ənz/',
    partOfSpeech: 'noun',
    easyDefinition: 'The sky above, the universe of stars, and the special dwelling place of God.',
    biblicalNote: 'Genesis 1:1 says God created the heavens and the earth.',
    exampleSentence: 'At night we see countless stars in the beautiful heavens.',
  },
  dominion: {
    word: 'Dominion',
    phonetic: '/dəˈmɪn.jən/',
    partOfSpeech: 'noun',
    easyDefinition: 'The royal authority and responsibility to rule, care for, and protect creation.',
    biblicalNote: 'God trusted Adam and Eve with dominion to care for the earth.',
    exampleSentence: 'Good leaders exercise dominion with gentle care and wisdom.',
    isKeyTheologicalTerm: true,
  },
  livestock: {
    word: 'Livestock',
    phonetic: '/ˈlaɪv.stɒk/',
    partOfSpeech: 'noun',
    easyDefinition: 'Farm animals like cows, sheep, and horses kept for work or food.',
    biblicalNote: 'Mentioned in Genesis 1:26 as creatures God made under human care.',
    exampleSentence: 'The farmer took good care of the livestock in the green meadow.',
  },
  creeping: {
    word: 'Creeping',
    phonetic: '/ˈkriː.pɪŋ/',
    partOfSpeech: 'adjective / verb',
    easyDefinition: 'Moving slowly and quietly close to the ground, like lizards, ants, or small animals.',
    biblicalNote: 'Genesis mentions creeping creatures as part of God\'s varied creation.',
    exampleSentence: 'A small turtle went creeping across the garden path.',
  },
  worthy: {
    word: 'Worthy',
    phonetic: '/ˈwɜː.ði/',
    partOfSpeech: 'adjective',
    easyDefinition: 'Deserving great honor, thanks, praise, and respect because of true goodness.',
    biblicalNote: 'Revelation 4:11 says: "Worthy are you, our Lord and God, to receive glory!"',
    exampleSentence: 'God is completely worthy of all our trust and worship.',
    isKeyTheologicalTerm: true,
  },
  shame: {
    word: 'Shame',
    phonetic: '/ʃeɪm/',
    partOfSpeech: 'noun',
    easyDefinition: 'The painful feeling of losing honor, feeling disgraced, exposed, or dirty before others and God.',
    biblicalNote: 'Sin brought shame to Adam and Eve, causing them to hide from God.',
    exampleSentence: 'Jesus died on the cross to take away our deep shame and give us honor.',
    isKeyTheologicalTerm: true,
  },
  eden: {
    word: 'Eden',
    phonetic: '/ˈiː.dən/',
    partOfSpeech: 'noun',
    easyDefinition: 'The wonderful garden of paradise God made for Adam and Eve, filled with peace and joy.',
    biblicalNote: 'Eden in Hebrew means "delight" or "pleasure".',
    exampleSentence: 'In the Garden of Eden, humans walked with God without fear.',
  },
  deceived: {
    word: 'Deceived',
    phonetic: '/dɪˈsiːvd/',
    partOfSpeech: 'verb (past tense)',
    easyDefinition: 'Tricked or fooled into believing a lie that seemed true.',
    biblicalNote: 'The serpent lied to Eve, deceiving her about God\'s goodness.',
    exampleSentence: 'The boy was deceived by a false promise.',
    isKeyTheologicalTerm: true,
  },
  devil: {
    word: 'Devil',
    phonetic: '/ˈdev.əl/',
    partOfSpeech: 'noun',
    easyDefinition: 'The chief enemy of God who tells lies, tempts people to do evil, and brings division.',
    biblicalNote: 'Also called Satan, meaning "accuser" or "adversary".',
    exampleSentence: 'Jesus defeated the power of the devil through His resurrection.',
    isKeyTheologicalTerm: true,
  },
  faithfulness: {
    word: 'Faithfulness',
    phonetic: '/ˈfeɪθ.fəl.nəs/',
    partOfSpeech: 'noun',
    easyDefinition: 'Always keeping your promises; being completely reliable, honest, and loyal.',
    biblicalNote: 'Lamentations 3:23: "Great is your faithfulness; your mercies never fail."',
    exampleSentence: 'God\'s faithfulness gives us peace in hard times.',
    isKeyTheologicalTerm: true,
  },
  selfish: {
    word: 'Selfish',
    phonetic: '/ˈsel.fɪʃ/',
    partOfSpeech: 'adjective',
    easyDefinition: 'Caring only about yourself and your own desires, without caring about God or others.',
    biblicalNote: 'Selfish pride is at the heart of the first sin in Eden.',
    exampleSentence: 'Instead of sharing, a selfish heart holds tightly to everything.',
  },
  loyal: {
    word: 'Loyal',
    phonetic: '/ˈlɔɪ.əl/',
    partOfSpeech: 'adjective',
    easyDefinition: 'Firmly standing by someone with lasting love, trust, and commitment.',
    biblicalNote: 'Covenant love (hesed) describes God\'s steadfast, loyal love for His people.',
    exampleSentence: 'A loyal friend never leaves you when troubles arise.',
    isKeyTheologicalTerm: true,
  },
  rebelled: {
    word: 'Rebelled',
    phonetic: '/rɪˈbeld/',
    partOfSpeech: 'verb (past tense)',
    easyDefinition: 'Refused to follow God\'s good instructions; turned against God\'s rightful authority.',
    biblicalNote: 'Humanity rebelled against God, bringing sorrow and separation into the world.',
    exampleSentence: 'The subjects rebelled against the good king.',
    isKeyTheologicalTerm: true,
  },
  wisdom: {
    word: 'Wisdom',
    phonetic: '/ˈwɪz.dəm/',
    partOfSpeech: 'noun',
    easyDefinition: 'The gift of knowing what is true, right, and pleasing to God, and living by it.',
    biblicalNote: 'Proverbs 9:10: "The fear of the LORD is the beginning of wisdom."',
    exampleSentence: 'True wisdom comes from listening to God\'s word.',
  },
  dishonored: {
    word: 'Dishonored',
    phonetic: '/dɪsˈɒn.əd/',
    partOfSpeech: 'verb (past tense)',
    easyDefinition: 'Treated someone with disrespect, insulting their good name and dignity.',
    biblicalNote: 'Disobeying God dishonored Him as the loving Father and King.',
    exampleSentence: 'The son dishonored his family by breaking his solemn promise.',
    isKeyTheologicalTerm: true,
  },
  cursed: {
    word: 'Cursed',
    phonetic: '/kɜːst/',
    partOfSpeech: 'verb / adjective',
    easyDefinition: 'Placed under harm, sorrow, and separation from God\'s pure blessing.',
    biblicalNote: 'Genesis 3 explains how the ground and creation suffered after sin entered.',
    exampleSentence: 'Jesus bore our curse on the tree so we might receive God\'s blessing.',
  },
  sin: {
    word: 'Sin',
    phonetic: '/sɪn/',
    partOfSpeech: 'noun / verb',
    easyDefinition: 'Breaking God\'s law; walking away from God\'s love and putting self above God.',
    biblicalNote: 'The Greek word "hamartia" means missing the mark of God\'s holiness.',
    exampleSentence: 'Sin damages our relationship with God, but Jesus offers total forgiveness.',
    isKeyTheologicalTerm: true,
  },
  suffering: {
    word: 'Suffering',
    phonetic: '/ˈsʌf.ər.ɪŋ/',
    partOfSpeech: 'noun',
    easyDefinition: 'Feeling great physical pain, sickness, emotional grief, or hardship.',
    biblicalNote: 'Jesus entered human suffering so He could rescue and heal us.',
    exampleSentence: 'One day in heaven, there will be no more pain or suffering.',
  },
  brokenness: {
    word: 'Brokenness',
    phonetic: '/ˈbrəʊ.kən.nəs/',
    partOfSpeech: 'noun',
    easyDefinition: 'The wounded, damaged condition of human hearts, families, and society because of sin.',
    biblicalNote: 'Psalm 147:3: "He heals the brokenhearted and binds up their wounds."',
    exampleSentence: 'God enters into our brokenness to bring healing and restore our dignity.',
  },
  struggle: {
    word: 'Struggle',
    phonetic: '/ˈstrʌɡ.əl/',
    partOfSpeech: 'verb / noun',
    easyDefinition: 'To fight hard against weakness, hardship, or temptation.',
    biblicalNote: 'Romans 7 describes the inner struggle between doing good and failing.',
    exampleSentence: 'We struggle with temptation, but the Holy Spirit gives us strength.',
  },
  salvation: {
    word: 'Salvation',
    phonetic: '/sælˈveɪ.ʃən/',
    partOfSpeech: 'noun',
    easyDefinition: 'Being rescued by God from the penalty, power, and shame of sin into eternal life.',
    biblicalNote: 'The name Jesus ("Yeshua") literally means "the LORD is salvation".',
    exampleSentence: 'Salvation is a free gift from God received through faith in Jesus.',
    isKeyTheologicalTerm: true,
  },
  refuge: {
    word: 'Refuge',
    phonetic: '/ˈref.juːdʒ/',
    partOfSpeech: 'noun',
    easyDefinition: 'A safe place of protection and shelter from storm, enemy, or danger.',
    biblicalNote: 'Psalm 62:7 declares: "My mighty rock, my refuge is God."',
    exampleSentence: 'When frightened, the traveler found refuge inside the fortress.',
    isKeyTheologicalTerm: true,
  },
  bloodline: {
    word: 'Bloodline',
    phonetic: '/ˈblʌd.laɪn/',
    partOfSpeech: 'noun',
    easyDefinition: 'The line of physical family ancestors from which a person is born.',
    biblicalNote: 'Jesus came from King David\'s royal bloodline, fulfilling biblical prophecy.',
    exampleSentence: 'In God\'s family, entry is not by bloodline, but through faith in Jesus.',
  },
  jewish: {
    word: 'Jewish',
    phonetic: '/ˈdʒuː.ɪʃ/',
    partOfSpeech: 'adjective',
    easyDefinition: 'Belonging to the people of Israel who trace their lineage to Abraham.',
    biblicalNote: 'Jesus was born into a Jewish family in Bethlehem of Judea.',
    exampleSentence: 'Jesus learned the Jewish scriptures as a boy in Nazareth.',
  },
  fulfilled: {
    word: 'Fulfilled',
    phonetic: '/fʊlˈfɪld/',
    partOfSpeech: 'verb (past tense)',
    easyDefinition: 'Carried out and finished completely; brought to pass what was promised.',
    biblicalNote: 'Jesus said He came not to destroy the Law, but to fulfill it completely (Matthew 5:17).',
    exampleSentence: 'Jesus fulfilled all the Old Testament prophecies about the Messiah.',
    isKeyTheologicalTerm: true,
  },
  obedient: {
    word: 'Obedient',
    phonetic: '/əʊˈbiː.di.ənt/',
    partOfSpeech: 'adjective',
    easyDefinition: 'Willing to listen to and do what God commands with respect and joy.',
    biblicalNote: 'Philippians 2:8: "He was obedient to death, even death on a cross."',
    exampleSentence: 'Jesus was perfectly obedient to His heavenly Father.',
    isKeyTheologicalTerm: true,
  },
  reputation: {
    word: 'Reputation',
    phonetic: '/ˌrep.jəˈteɪ.ʃən/',
    partOfSpeech: 'noun',
    easyDefinition: 'What other people say, think, or believe about a person\'s character.',
    biblicalNote: 'Jesus spent time with outcasts, not caring about human status.',
    exampleSentence: 'Jesus welcomed tax collectors and sinners despite their poor reputation.',
  },
  ethnicity: {
    word: 'Ethnicity',
    phonetic: '/eθˈnɪs.ə.ti/',
    partOfSpeech: 'noun',
    easyDefinition: 'A person\'s cultural background, heritage, nationality, or people group.',
    biblicalNote: 'Revelation 7 shows people from every nation, tribe, and tongue before the throne.',
    exampleSentence: 'God\'s family includes people of every culture and ethnicity.',
  },
  perish: {
    word: 'Perish',
    phonetic: '/ˈper.ɪʃ/',
    partOfSpeech: 'verb',
    easyDefinition: 'To die spiritually and be lost forever, separated from God\'s life and joy.',
    biblicalNote: 'John 3:16 promises that whoever believes in Jesus will not perish.',
    exampleSentence: 'God wants no one to perish, but everyone to turn to Him.',
  },
  eternal: {
    word: 'Eternal',
    phonetic: '/ɪˈtɜː.nəl/',
    partOfSpeech: 'adjective',
    easyDefinition: 'Living forever; having no beginning and no end; never dying.',
    biblicalNote: 'Eternal life is not just endless time, but knowing the true God now and forever.',
    exampleSentence: 'Jesus gives eternal life to all who place their trust in Him.',
    isKeyTheologicalTerm: true,
  },
  condemn: {
    word: 'Condemn',
    phonetic: '/kənˈdem/',
    partOfSpeech: 'verb',
    easyDefinition: 'To declare someone guilty of a crime and pronounce punishment on them.',
    biblicalNote: 'John 3:17: "God did not send his Son into the world to condemn the world, but to save it."',
    exampleSentence: 'There is now no condemnation for those who belong to Christ Jesus.',
    isKeyTheologicalTerm: true,
  },
  cross: {
    word: 'Cross',
    phonetic: '/krɒs/',
    partOfSpeech: 'noun',
    easyDefinition: 'The wooden stake where Jesus was executed, willingly dying to take away our shame and sins.',
    biblicalNote: 'The cross turned from an instrument of Roman shame into the symbol of God\'s victory and love.',
    exampleSentence: 'Jesus bore our sins on the cross so that we could be forgiven.',
    isKeyTheologicalTerm: true,
  },
  burden: {
    word: 'Burden',
    phonetic: '/ˈbɜː.dən/',
    partOfSpeech: 'noun',
    easyDefinition: 'A heavy weight or load, such as intense guilt, worry, or grief.',
    biblicalNote: 'Jesus said: "Come to me, all who labor and are heavy laden, and I will give you rest."',
    exampleSentence: 'Jesus lifted the burden of sin from our shoulders.',
  },
  punishment: {
    word: 'Punishment',
    phonetic: '/ˈpʌn.ɪʃ.mənt/',
    partOfSpeech: 'noun',
    easyDefinition: 'The penalty given to someone who has broken the law or done wrong.',
    biblicalNote: 'Isaiah 53:5: "The punishment that brought us peace was on him."',
    exampleSentence: 'Jesus willingly took the punishment we deserved.',
  },
  buried: {
    word: 'Buried',
    phonetic: '/ˈber.id/',
    partOfSpeech: 'verb (past tense)',
    easyDefinition: 'Placed inside a grave, tomb, or cave after passing away.',
    biblicalNote: 'Jesus was buried in the tomb of Joseph of Arimathea.',
    exampleSentence: 'Jesus was buried on Friday, but on Sunday morning the tomb was empty.',
  },
  rose: {
    word: 'Rose',
    phonetic: '/rəʊz/',
    partOfSpeech: 'verb (past tense)',
    easyDefinition: 'Came back to life from the dead; resurrected with power.',
    biblicalNote: 'On the third day, Jesus rose victoriously over death.',
    exampleSentence: 'Christ rose from the dead, proving His power over sin.',
    isKeyTheologicalTerm: true,
  },
  ascending: {
    word: 'Ascending',
    phonetic: '/əˈsen.dɪŋ/',
    partOfSpeech: 'verb',
    easyDefinition: 'Going upward into heaven to return to the glorious throne of God.',
    biblicalNote: 'Acts 1 describes Jesus ascending into a cloud while the disciples watched.',
    exampleSentence: 'Before ascending to heaven, Jesus blessed His disciples.',
  },
  restore: {
    word: 'Restore',
    phonetic: '/rɪˈstɔːr/',
    partOfSpeech: 'verb',
    easyDefinition: 'To bring back to a good, healthy, and beautiful condition; to repair what was broken.',
    biblicalNote: 'God promises to restore all creation and wipe away tears.',
    exampleSentence: 'God will restore our honor and heal our broken hearts.',
    isKeyTheologicalTerm: true,
  },
  humbled: {
    word: 'Humbled',
    phonetic: '/ˈhʌm.bəld/',
    partOfSpeech: 'verb (past tense)',
    easyDefinition: 'Lowered oneself gently to serve others rather than demanding honor or boasting.',
    biblicalNote: 'Philippians 2:8 says Jesus humbled Himself by taking human form.',
    exampleSentence: 'The leader humbled himself and washed the feet of his workers.',
  },
  exalted: {
    word: 'Exalted',
    phonetic: '/ɪɡˈzɔːl.tɪd/',
    partOfSpeech: 'verb (past tense)',
    easyDefinition: 'Raised to the supreme place of highest honor, authority, and praise.',
    biblicalNote: 'Because Jesus humbled Himself, God has highly exalted Him.',
    exampleSentence: 'God exalted Jesus above all powers and names.',
    isKeyTheologicalTerm: true,
  },
  servant: {
    word: 'Servant',
    phonetic: '/ˈsɜː.vənt/',
    partOfSpeech: 'noun',
    easyDefinition: 'A person who willingly cares for the needs of others with loyalty and humility.',
    biblicalNote: 'Jesus said the greatest among you shall be your servant.',
    exampleSentence: 'Jesus lived as a loving servant to all people.',
  },
  witnesses: {
    word: 'Witnesses',
    phonetic: '/ˈwɪt.nəs.ɪz/',
    partOfSpeech: 'noun (plural)',
    easyDefinition: 'People who saw something happen with their own eyes and testify about it.',
    biblicalNote: 'Hebrews 12 speaks of a "great cloud of witnesses" encouraging our faith.',
    exampleSentence: 'The disciples were eyewitnesses of Jesus after He rose from the dead.',
  },
  endurance: {
    word: 'Endurance',
    phonetic: '/ɪnˈdjʊə.rəns/',
    partOfSpeech: 'noun',
    easyDefinition: 'The strength to keep running and not give up, even when things are very painful or hard.',
    biblicalNote: 'Hebrews 12:1 urges believers to run with endurance the race set before them.',
    exampleSentence: 'With prayer and endurance, the runner finished the difficult marathon.',
  },
  despising: {
    word: 'Despising',
    phonetic: '/dɪˈspaɪ.zɪŋ/',
    partOfSpeech: 'verb',
    easyDefinition: 'Thinking of something as small or unimportant compared to a far greater joy.',
    biblicalNote: 'Hebrews 12:2: Jesus endured the cross, despising its shame for the joy of saving us.',
    exampleSentence: 'Jesus considered the shame of the cross nothing compared to bringing us home.',
  },
  resurrected: {
    word: 'Resurrected',
    phonetic: '/ˌrez.əˈrek.tɪd/',
    partOfSpeech: 'verb / adjective',
    easyDefinition: 'Raised back to life after being dead, with a brand new, glorious, eternal body.',
    biblicalNote: '1 Corinthians 15 explains the promise of resurrection for all who belong to Jesus.',
    exampleSentence: 'Believers will be resurrected to live in God\'s glorious presence forever.',
    isKeyTheologicalTerm: true,
  },
  afterlife: {
    word: 'Afterlife',
    phonetic: '/ˈɑːf.tə.laɪf/',
    partOfSpeech: 'noun',
    easyDefinition: 'The eternal life that continues in the presence of God after our physical body dies.',
    biblicalNote: 'Jesus promised: "Whoever believes in me will live, even though they die."',
    exampleSentence: 'In the afterlife, God will wipe away every tear and sorrow.',
    isKeyTheologicalTerm: true,
  },
  mourning: {
    word: 'Mourning',
    phonetic: '/ˈmɔː.nɪŋ/',
    partOfSpeech: 'noun',
    easyDefinition: 'Deep sorrow and crying when someone we love dies or when tragedy strikes.',
    biblicalNote: 'Revelation 21:4 promises that in the new creation, mourning will exist no more.',
    exampleSentence: 'God comforts all who are in mourning with His gentle peace.',
  },
  confounded: {
    word: 'Confounded',
    phonetic: '/kənˈfaʊn.dɪd/',
    partOfSpeech: 'adjective',
    easyDefinition: 'Confused, overwhelmed with shame, or put to defeat before enemies.',
    biblicalNote: 'Isaiah 54:4: "Fear not, for you will not be ashamed; be not confounded."',
    exampleSentence: 'Those who trust in God will never be confounded or abandoned.',
  },
  disgraced: {
    word: 'Disgraced',
    phonetic: '/dɪsˈɡreɪst/',
    partOfSpeech: 'adjective / verb',
    easyDefinition: 'Suffering public shame or loss of respect.',
    biblicalNote: 'God promises to remove the disgrace of His people forever.',
    exampleSentence: 'You will not be disgraced, because God covers you with His honor.',
  },
  teachings: {
    word: 'Teachings',
    phonetic: '/ˈtiː.tʃɪŋz/',
    partOfSpeech: 'noun (plural)',
    easyDefinition: 'The instructions, lessons, and principles given by Jesus to show how we should live.',
    biblicalNote: 'The Sermon on the Mount contains Jesus\' core teachings on kingdom love.',
    exampleSentence: 'The disciples shared the teachings of Jesus with all people.',
  },
  holy_spirit: {
    word: 'Holy Spirit',
    phonetic: '/ˈhəʊ.li ˈspɪr.ɪt/',
    partOfSpeech: 'noun',
    easyDefinition: 'God Himself living inside Christians to comfort, guide, empower, and help them love.',
    biblicalNote: 'Jesus promised the Holy Spirit as the Counselor and Helper (John 14:26).',
    exampleSentence: 'The Holy Spirit helps us grow in kindness, joy, and peace.',
    isKeyTheologicalTerm: true,
  },
  adoption: {
    word: 'Adoption',
    phonetic: '/əˈdɒp.ʃən/',
    partOfSpeech: 'noun',
    easyDefinition: 'Being welcomed and legally made a true child of God with all the rights of His family.',
    biblicalNote: 'Romans 8:15 says we receive the Spirit of adoption, calling God "Abba, Father!"',
    exampleSentence: 'Through adoption into God\'s family, we are never orphans again.',
    isKeyTheologicalTerm: true,
  },
  heirs: {
    word: 'Heirs',
    phonetic: '/eərz/',
    partOfSpeech: 'noun (plural)',
    easyDefinition: 'Children who inherit their family\'s estate, kingdom riches, and royal blessings.',
    biblicalNote: 'Romans 8:17: "If children, then heirs—heirs of God and fellow heirs with Christ."',
    exampleSentence: 'As heirs of God, we share in Christ\'s eternal inheritance and glory.',
    isKeyTheologicalTerm: true,
  },
  confess: {
    word: 'Confess',
    phonetic: '/kənˈfes/',
    partOfSpeech: 'verb',
    easyDefinition: 'To speak openly and honestly what you believe, or admit where you have fallen short.',
    biblicalNote: 'Romans 10:9: "If you confess with your mouth that Jesus is Lord, you will be saved."',
    exampleSentence: 'We confess our sins to God because He is faithful to forgive us.',
    isKeyTheologicalTerm: true,
  },
  patience: {
    word: 'Patience',
    phonetic: '/ˈpeɪ.ʃəns/',
    partOfSpeech: 'noun',
    easyDefinition: 'Waiting calmly without anger or complaint, even when circumstances are frustrating.',
    biblicalNote: 'Patience is listed in Galatians 5 as a fruit of the Holy Spirit.',
    exampleSentence: 'A patient teacher answers questions kindly again and again.',
  },
  kindness: {
    word: 'Kindness',
    phonetic: '/ˈkaɪnd.nəs/',
    partOfSpeech: 'noun',
    easyDefinition: 'Warm, generous, and caring actions toward other people without expecting anything back.',
    biblicalNote: 'God\'s kindness leads people toward repentance and renewed life.',
    exampleSentence: 'A simple act of kindness can brighten someone\'s whole day.',
  },
  gentleness: {
    word: 'Gentleness',
    phonetic: '/ˈdʒen.təl.nəs/',
    partOfSpeech: 'noun',
    easyDefinition: 'Being calm, humble, and tender in your words and touch, never harsh or violent.',
    biblicalNote: 'Proverbs 15:1: "A gentle answer turns away wrath."',
    exampleSentence: 'She handled the fragile bird with deep gentleness.',
  },
  self_control: {
    word: 'Self-control',
    phonetic: '/ˌself.kənˈtrəʊl/',
    partOfSpeech: 'noun',
    easyDefinition: 'The ability to master your emotions, desires, and words with the Holy Spirit\'s help.',
    biblicalNote: 'Galatians 5:23 describes self-control as the fruit of the Holy Spirit.',
    exampleSentence: 'With self-control, he chose not to shout back when insulted.',
    isKeyTheologicalTerm: true,
  },
  prayer: {
    word: 'Prayer',
    phonetic: '/preər/',
    partOfSpeech: 'noun',
    easyDefinition: 'Heart-to-heart communication with God: speaking, thanking, asking, and listening to Him.',
    biblicalNote: 'Philippians 4:6 urges us to bring all worries to God in prayer with thanksgiving.',
    exampleSentence: 'Every evening the family joins hands in quiet prayer.',
    isKeyTheologicalTerm: true,
  },
  amen: {
    word: 'Amen',
    phonetic: '/ɑːˈmen/ or /eɪˈmen/',
    partOfSpeech: 'interjection',
    easyDefinition: 'A Hebrew word meaning "Truly!", "So be it!", or "I agree with my whole heart!"',
    biblicalNote: 'Used at the end of prayers to affirm faith and full agreement.',
    exampleSentence: 'After the pastor finished praying, the whole congregation said, "Amen!"',
    isKeyTheologicalTerm: true,
  },
  grace: {
    word: 'Grace',
    phonetic: '/ɡreɪs/',
    partOfSpeech: 'noun',
    easyDefinition: 'God\'s unconditional favor, kindness, and love given freely to people who did not earn it.',
    biblicalNote: 'Ephesians 2:8: "For by grace you have been saved through faith."',
    exampleSentence: 'God gives us grace even when we make mistakes.',
    isKeyTheologicalTerm: true,
  },
  faith: {
    word: 'Faith',
    phonetic: '/feɪθ/',
    partOfSpeech: 'noun',
    easyDefinition: 'Trusting God with all your heart, believing in His promises even when you cannot see them yet.',
    biblicalNote: 'Hebrews 11:1: "Faith is the assurance of things hoped for, the conviction of things not seen."',
    exampleSentence: 'Her faith in Jesus gave her courage during the storm.',
    isKeyTheologicalTerm: true,
  },
  repent: {
    word: 'Repent',
    phonetic: '/rɪˈpent/',
    partOfSpeech: 'verb',
    easyDefinition: 'Turning around from doing wrong, asking God for forgiveness, and choosing His good way.',
    biblicalNote: 'The Greek word "metanoia" means changing your mind and heart toward God.',
    exampleSentence: 'When we repent, God washes away our guilt and gives us a fresh start.',
    isKeyTheologicalTerm: true,
  },
  gospel: {
    word: 'Gospel',
    phonetic: '/ˈɡɒs.pəl/',
    partOfSpeech: 'noun',
    easyDefinition: 'The "good news" that Jesus died for our sins, rose again, and invites us into God\'s family.',
    biblicalNote: 'Romans 1:16 calls the gospel "the power of God for salvation to everyone who believes."',
    exampleSentence: 'The gospel brings true hope, honor, and life to all who hear it.',
    isKeyTheologicalTerm: true,
  },
  forgiveness: {
    word: 'Forgiveness',
    phonetic: '/fəˈɡɪv.nəs/',
    partOfSpeech: 'noun',
    easyDefinition: 'Pardoning someone who wronged you; letting go of anger and not holding debt against them.',
    biblicalNote: 'Colossians 3:13: "Forgive as the Lord forgave you."',
    exampleSentence: 'God offers full forgiveness when we come to Him with a sincere heart.',
    isKeyTheologicalTerm: true,
  },
  righteousness: {
    word: 'Righteousness',
    phonetic: '/ˈraɪ.tʃəs.nəs/',
    partOfSpeech: 'noun',
    easyDefinition: 'Being right with God, pure in character, and living according to God\'s holy will.',
    biblicalNote: 'In Christ, believers receive the righteousness of God as a gift.',
    exampleSentence: 'Jesus lived a life of perfect righteousness without sin.',
    isKeyTheologicalTerm: true,
  },
  disciples: {
    word: 'Disciples',
    phonetic: '/dɪˈsaɪ.pəlz/',
    partOfSpeech: 'noun (plural)',
    easyDefinition: 'Followers and students who learn from a teacher and put the teachings into daily practice.',
    biblicalNote: 'Jesus called twelve close disciples to follow Him and learn His ways.',
    exampleSentence: 'The disciples traveled with Jesus across the countryside.',
  },
  parable: {
    word: 'Parable',
    phonetic: '/ˈpær.ə.bəl/',
    partOfSpeech: 'noun',
    easyDefinition: 'A simple earthly story Jesus told to explain a deep, heavenly truth about God\'s kingdom.',
    biblicalNote: 'Jesus often used parables about farming, lost coins, or fathers and sons.',
    exampleSentence: 'The parable of the lost sheep showed God\'s loving heart for every person.',
  },
  covenant: {
    word: 'Covenant',
    phonetic: '/ˈkʌv.ə.nənt/',
    partOfSpeech: 'noun',
    easyDefinition: 'A sacred, solemn agreement and binding relationship of love and loyalty between God and His people.',
    biblicalNote: 'Jesus made a new covenant through His blood shed on the cross.',
    exampleSentence: 'God never breaks His holy covenant of love.',
    isKeyTheologicalTerm: true,
  },
};

// Word normalization / lemma stemming helper
export function findDictionaryEntry(rawWord: string): DictionaryEntry | null {
  if (!rawWord) return null;
  const clean = rawWord.toLowerCase().replace(/[^a-z0-9-]/g, '');
  if (!clean) return null;

  // Exact match
  if (EASY_ENGLISH_DICTIONARY[clean]) {
    return EASY_ENGLISH_DICTIONARY[clean];
  }

  // Handle hyphen / underscore variations
  const underscored = clean.replace(/-/g, '_');
  if (EASY_ENGLISH_DICTIONARY[underscored]) {
    return EASY_ENGLISH_DICTIONARY[underscored];
  }

  // Common inflections: plural -s, -es, -ies
  if (clean.endsWith('ies') && clean.length > 4) {
    const candidate = clean.slice(0, -3) + 'y';
    if (EASY_ENGLISH_DICTIONARY[candidate]) return EASY_ENGLISH_DICTIONARY[candidate];
  }
  if (clean.endsWith('es') && clean.length > 3) {
    const candidate = clean.slice(0, -2);
    if (EASY_ENGLISH_DICTIONARY[candidate]) return EASY_ENGLISH_DICTIONARY[candidate];
  }
  if (clean.endsWith('s') && clean.length > 2) {
    const candidate = clean.slice(0, -1);
    if (EASY_ENGLISH_DICTIONARY[candidate]) return EASY_ENGLISH_DICTIONARY[candidate];
  }

  // Past tense / participle -ed
  if (clean.endsWith('ed')) {
    const cand1 = clean.slice(0, -1); // e.g. cursed -> curse
    if (EASY_ENGLISH_DICTIONARY[cand1]) return EASY_ENGLISH_DICTIONARY[cand1];
    const cand2 = clean.slice(0, -2); // e.g. rebelled -> rebel (double consonant)
    if (EASY_ENGLISH_DICTIONARY[cand2]) return EASY_ENGLISH_DICTIONARY[cand2];
    if (cand2.length >= 3 && cand2[cand2.length - 1] === cand2[cand2.length - 2]) {
      const strippedDouble = cand2.slice(0, -1);
      if (EASY_ENGLISH_DICTIONARY[strippedDouble]) return EASY_ENGLISH_DICTIONARY[strippedDouble];
    }
  }

  // Continuous -ing
  if (clean.endsWith('ing')) {
    const cand1 = clean.slice(0, -3);
    if (EASY_ENGLISH_DICTIONARY[cand1]) return EASY_ENGLISH_DICTIONARY[cand1];
    const cand2 = cand1 + 'e';
    if (EASY_ENGLISH_DICTIONARY[cand2]) return EASY_ENGLISH_DICTIONARY[cand2];
    if (cand1.length >= 3 && cand1[cand1.length - 1] === cand1[cand1.length - 2]) {
      const strippedDouble = cand1.slice(0, -1);
      if (EASY_ENGLISH_DICTIONARY[strippedDouble]) return EASY_ENGLISH_DICTIONARY[strippedDouble];
    }
  }

  // Adverbs -ly
  if (clean.endsWith('ly') && clean.length > 4) {
    const cand = clean.slice(0, -2);
    if (EASY_ENGLISH_DICTIONARY[cand]) return EASY_ENGLISH_DICTIONARY[cand];
  }

  return null;
}
