export interface ScriptureVerse {
  reference: string;
  text: string;
  theme?: string;
}

export interface BookPage {
  pageNumber: number;
  title: string;
  subtitle?: string;
  paragraphs: string[];
  scriptures?: ScriptureVerse[];
  illustration?: {
    src: string;
    alt: string;
    caption: string;
  };
  originalScan: string;
  audioText: string;
  keyWords: string[];
}

export const BOOK_PAGES: BookPage[] = [
  {
    pageNumber: 1,
    title: 'WHAT DO CHRISTIANS BELIEVE ABOUT FAMILY OF GOD?',
    subtitle: 'By Lewis Ikeda',
    paragraphs: [
      "I’m a Christian, which means I love Jesus and am part of God's family, the church, in addition to the family I was born into.",
      "Let me share a story that brings us together as the church—the family of God’s Kingdom."
    ],
    originalScan: '/book-pages/page-01.jpg',
    audioText: "What do Christians believe about family of God? By Lewis Ikeda. I’m a Christian, which means I love Jesus and am part of God's family, the church, in addition to the family I was born into. Let me share a story that brings us together as the church—the family of God’s Kingdom.",
    keyWords: ['Christian', 'church', 'kingdom', 'family']
  },
  {
    pageNumber: 2,
    title: 'GOD THE CREATOR IS THE FATHER OF ALL',
    paragraphs: [
      "The Bible teaches that our ancestors started from one man and one woman. God is the creator of the universe and the one who started all family lines. He is the greatest father of all humanity because he created Adam and Eve, the first man and woman. God is also the greatest king above all kings and the ultimate source of honor and glory because he rules the whole world."
    ],
    illustration: {
      src: '/book-art/art-creator.jpg',
      alt: "God's hand holding and orchestrating celestial spheres and the cosmos",
      caption: 'The Sovereign Creator forming the cosmos and all humanity.'
    },
    scriptures: [
      {
        reference: 'Genesis 1:1',
        text: 'In the beginning, God created the heavens and the earth.'
      },
      {
        reference: 'Genesis 1:26',
        text: 'Then God said, “Let us make man in our image, after our likeness. And let them have dominion over the fish of the sea and over the birds of the heavens and over the livestock and over all the earth and over every creeping thing that creeps on the earth.”'
      },
      {
        reference: 'Revelation 4:11',
        text: '“Worthy are you, our Lord and God, to receive glory and honor and power, for you created all things, and by your will they existed and were created.”'
      }
    ],
    originalScan: '/book-pages/page-02.jpg',
    audioText: "God the Creator is the Father of all. The Bible teaches that our ancestors started from one man and one woman. God is the creator of the universe and the one who started all family lines. He is the greatest father of all humanity because he created Adam and Eve, the first man and woman. God is also the greatest king above all kings and the ultimate source of honor and glory because he rules the whole world. In the beginning, God created the heavens and the earth. Genesis 1:1.",
    keyWords: ['ancestors', 'creator', 'humanity', 'honor', 'glory', 'dominion', 'worthy', 'livestock', 'creeping']
  },
  {
    pageNumber: 3,
    title: 'THE FIRST SIN IN EDEN',
    paragraphs: [
      "When God created the world, he made a beautiful garden on earth and placed Adam and Eve there. God trusted Adam and Eve, so he gave them the responsibility of governing the world together. In this beautiful garden, called Eden, there was no shame. Everything was peaceful and filled with love and kindness.",
      "But Adam and Eve were deceived by the devil in the garden. The devil caused them to doubt God's faithfulness and kindness by telling them a lie. Then Adam and Eve became selfish. Rather than remaining loyal to God the Father, they chose to become like great gods themselves. Adam and Eve rebelled against God by eating the fruit of knowledge and wisdom. They dishonored God, so they had to leave the Garden of Eden, and the whole earth was cursed."
    ],
    scriptures: [
      {
        reference: 'Genesis 2:15',
        text: 'The LORD God took the man and put him in the garden of Eden to work it and keep it.'
      },
      {
        reference: 'Genesis 2:25',
        text: 'And the man and his wife were both naked and were not ashamed.'
      },
      {
        reference: 'Genesis 3:17',
        text: 'And to Adam he said, “Because you have listened to the voice of your wife and have eaten of the tree of which I commanded you, ‘You shall not eat of it,’ cursed is the ground because of you; in pain you shall eat of it all the days of your life.”'
      }
    ],
    originalScan: '/book-pages/page-03.jpg',
    audioText: "The first sin in Eden. When God created the world, he made a beautiful garden on earth and placed Adam and Eve there. God trusted Adam and Eve, so he gave them the responsibility of governing the world together. In this beautiful garden, called Eden, there was no shame. Everything was peaceful and filled with love and kindness. But Adam and Eve were deceived by the devil in the garden. The devil caused them to doubt God's faithfulness and kindness by telling them a lie. Then Adam and Eve became selfish. Rather than remaining loyal to God the Father, they chose to become like great gods themselves. Adam and Eve rebelled against God by eating the fruit of knowledge and wisdom. They dishonored God, so they had to leave the Garden of Eden, and the whole earth was cursed.",
    keyWords: ['Eden', 'shame', 'deceived', 'devil', 'faithfulness', 'selfish', 'loyal', 'rebelled', 'wisdom', 'dishonored', 'cursed']
  },
  {
    pageNumber: 4,
    title: 'OUR PROBLEM',
    paragraphs: [
      "This selfish action against God is what we call sin. Sin spread to all of humanity through Adam and Eve, becoming the root cause of all the shame, suffering, and brokenness we experience today.",
      "We all struggle to overcome sin as we try to gain honor and leave behind the shame of our past. People try countless ways to be good, kind, and loyal to earn honor. But no one can wash away their past shame on their own because of the power of sin."
    ],
    scriptures: [
      {
        reference: 'Romans 3:23',
        text: 'For all have sinned and fall short of the glory of God.'
      },
      {
        reference: 'Psalms 62:7',
        text: 'On God rests my salvation and my glory; my mighty rock, my refuge is God.'
      }
    ],
    originalScan: '/book-pages/page-04.jpg',
    audioText: "Our problem. This selfish action against God is what we call sin. Sin spread to all of humanity through Adam and Eve, becoming the root cause of all the shame, suffering, and brokenness we experience today. We all struggle to overcome sin as we try to gain honor and leave behind the shame of our past. People try countless ways to be good, kind, and loyal to earn honor. But no one can wash away their past shame on their own because of the power of sin. For all have sinned and fall short of the glory of God. Romans 3:23.",
    keyWords: ['sin', 'shame', 'suffering', 'brokenness', 'struggle', 'honor', 'salvation', 'refuge']
  },
  {
    pageNumber: 5,
    title: 'JESUS, GOD THE SON',
    paragraphs: [
      "However, God is still loyal to humanity. So, God the Father sent Jesus to Earth. Jesus is God the Son, who is equal to God the Father in honor and glory. Jesus was born as a human baby into a poor Jewish family with a royal bloodline stretching back a thousand years. Jesus fulfilled all the requirements of the Jewish law throughout His life. He was always good and obedient to God the Father. Jesus was a great teacher. He loved all people, regardless of their reputation or ethnicity."
    ],
    illustration: {
      src: '/book-art/art-nativity.jpg',
      alt: 'Nativity of Jesus in Bethlehem with starry heavens and manger',
      caption: 'Jesus born in humility into a royal bloodline to bring God’s loyal love to all humanity.'
    },
    scriptures: [
      {
        reference: 'John 3:16-17',
        text: 'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life. For God did not send his Son into the world to condemn the world, but in order that the world might be saved through him.'
      }
    ],
    originalScan: '/book-pages/page-05.jpg',
    audioText: "Jesus, God the Son. However, God is still loyal to humanity. So, God the Father sent Jesus to Earth. Jesus is God the Son, who is equal to God the Father in honor and glory. Jesus was born as a human baby into a poor Jewish family with a royal bloodline stretching back a thousand years. Jesus fulfilled all the requirements of the Jewish law throughout His life. He was always good and obedient to God the Father. Jesus was a great teacher. He loved all people, regardless of their reputation or ethnicity. John 3:16-17.",
    keyWords: ['loyal', 'bloodline', 'Jewish', 'fulfilled', 'obedient', 'reputation', 'ethnicity', 'perish', 'eternal', 'condemn']
  },
  {
    pageNumber: 6,
    title: 'JESUS AND THE CROSS',
    paragraphs: [
      "To erase the shame caused by sin, Jesus took the entire burden of sin upon Himself. When Jesus died on the cross, all our punishment, hatred, shame, and curses were placed upon Him.",
      "Jesus died and was buried, but three days later, He rose again. He showed His kindness to His followers for forty days before ascending to heaven to sit at the right hand of God the Father in the kingdom of heaven. Throughout His life, Jesus lived as a perfect human being, honoring God the Father."
    ],
    illustration: {
      src: '/book-art/art-cross.jpg',
      alt: 'Historical painting of the Crucifixion of Jesus Christ',
      caption: 'Jesus bearing our burden of shame and curse on the cross.'
    },
    originalScan: '/book-pages/page-06.jpg',
    audioText: "Jesus and the cross. To erase the shame caused by sin, Jesus took the entire burden of sin upon Himself. When Jesus died on the cross, all our punishment, hatred, shame, and curses were placed upon Him. Jesus died and was buried, but three days later, He rose again. He showed His kindness to His followers for forty days before ascending to heaven to sit at the right hand of God the Father in the kingdom of heaven. Throughout His life, Jesus lived as a perfect human being, honoring God the Father.",
    keyWords: ['cross', 'burden', 'punishment', 'shame', 'buried', 'rose', 'ascending', 'kindness']
  },
  {
    pageNumber: 7,
    title: 'THE KINGDOM RESTORED & GOD’S INVITATION',
    paragraphs: [
      "Jesus promised to return in the future to restore his kingdom on earth by bringing the kingdom of heaven to earth.",
      "Jesus is inviting people to join the family of God's kingdom. Membership in God's family is not based on our good works or the family bloodline into which we were born."
    ],
    illustration: {
      src: '/book-art/art-ascension.jpg',
      alt: 'Artwork depicting Jesus ascending to heaven above his followers',
      caption: 'Exalted above every name, Jesus invites all into the family of God.'
    },
    scriptures: [
      {
        reference: 'Philippians 2:7-8',
        text: '(Jesus) emptied himself, by taking the form of a servant, being born in the likeness of men. And being found in human form, he humbled himself by becoming obedient to the point of death, even death on a cross. Therefore God has highly exalted him and bestowed on him the name that is above every name.'
      },
      {
        reference: 'Hebrews 12:1-2',
        text: 'Therefore, since we are surrounded by so great a cloud of witnesses, let us also lay aside every weight, and sin which clings so closely, and let us run with endurance the race that is set before us, looking to Jesus, the founder and perfecter of our faith, who for the joy that was set before him endured the cross, despising the shame, and is seated at the right hand of the throne of God.'
      }
    ],
    originalScan: '/book-pages/page-07.jpg',
    audioText: "Jesus promised to return in the future to restore his kingdom on earth by bringing the kingdom of heaven to earth. Jesus is inviting people to join the family of God's kingdom. Membership in God's family is not based on our good works or the family bloodline into which we were born.",
    keyWords: ['restore', 'servant', 'humbled', 'exalted', 'witnesses', 'endurance', 'despising', 'shame']
  },
  {
    pageNumber: 8,
    title: 'HOPE OF THE RESURRECTION',
    paragraphs: [
      "Those who belong to this kingdom will be resurrected in the afterlife, just as Jesus was raised from the dead with a new body. In the new heavenly kingdom of God, we will have a new name, a new role, and honor. In the new kingdom, there will be no shame, pain, sadness, sickness, or death."
    ],
    illustration: {
      src: '/book-art/art-resurrection.jpg',
      alt: 'Vibrant sky, luminous clouds, and calm peaceful ocean',
      caption: 'The glorious promise of resurrection: no more shame, tears, or death.'
    },
    scriptures: [
      {
        reference: 'Revelation 21:4',
        text: '“He will wipe away every tear from their eyes, and death shall be no more, neither shall there be mourning, nor crying, nor pain anymore, for the former things have passed away.”'
      },
      {
        reference: 'Isaiah 54:4',
        text: '“Fear not, for you will not be ashamed; be not confounded, for you will not be disgraced.”'
      }
    ],
    originalScan: '/book-pages/page-08.jpg',
    audioText: "Hope of the resurrection. Those who belong to this kingdom will be resurrected in the afterlife, just as Jesus was raised from the dead with a new body. In the new heavenly kingdom of God, we will have a new name, a new role, and honor. In the new kingdom, there will be no shame, pain, sadness, sickness, or death. Revelation 21:4.",
    keyWords: ['resurrected', 'afterlife', 'honor', 'mourning', 'confounded', 'disgraced']
  },
  {
    pageNumber: 9,
    title: 'HOUSE RULES AND HOLY SPIRIT',
    paragraphs: [
      "Anyone can join the royal family of God by believing in Jesus' death and resurrection and starting to follow His teachings. The teachings of Jesus are the central family rule we share. The two most important teachings are to love God and to love people as Jesus loved us! When we believe in Jesus, we receive the Holy Spirit from God the Father, who helps us live a life of loyal love, joy, peace, and kindness. Thanks to the power of the Holy Spirit, we can learn the teachings of Jesus like never before."
    ],
    scriptures: [
      {
        reference: 'John 1:12-13',
        text: 'But to all who did receive him, who believed in his name, he gave the right to become children of God, who were born, not of blood nor of the will of the flesh nor of the will of man, but of God.'
      },
      {
        reference: 'Romans 8:15-17',
        text: 'For you did not receive the spirit of slavery to fall back into fear, but you have received the Spirit of adoption as sons, by whom we cry, “Abba! Father!” The Spirit himself bears witness with our spirit that we are children of God, and if children, then heirs—heirs of God and fellow heirs with Christ, provided we suffer with him in order that we may also be glorified with him.'
      }
    ],
    originalScan: '/book-pages/page-09.jpg',
    audioText: "House rules and Holy Spirit. Anyone can join the royal family of God by believing in Jesus' death and resurrection and starting to follow His teachings. The teachings of Jesus are the central family rule we share. The two most important teachings are to love God and to love people as Jesus loved us! When we believe in Jesus, we receive the Holy Spirit from God the Father, who helps us live a life of loyal love, joy, peace, and kindness. Thanks to the power of the Holy Spirit, we can learn the teachings of Jesus like never before.",
    keyWords: ['teachings', 'Holy Spirit', 'adoption', 'heirs', 'glorified', 'loyal']
  },
  {
    pageNumber: 10,
    title: 'OUR INVITATION & PRAYER OF FAITH',
    paragraphs: [
      "Now, that is the story we share!",
      "If you enjoyed this story and are interested in a new life with our family in God’s Kingdom, you can join us today!",
      "Because Jesus has prepared everything you need to join the family, there is only one thing you need to do: accept his invitation by believing that he died for you. Once you accept His invitation, I encourage you to pray a prayer like this to declare your faith, ideally with another follower of Jesus:",
      "\"Our Father in heaven, we have sinned against you, bringing shame upon you and ourselves. I admit that I cannot save myself. Save us from our sins. Thank you for sending Jesus, our King, to remove the shame of our sin. Thank you for your plan to restore our honor. Thank you for welcoming us to join your family. We believe in the death of Jesus and his resurrection for our sins. Help us through the Holy Spirit to live a life of love, joy, peace, and kindness. In Jesus' name we pray, Amen.\""
    ],
    originalScan: '/book-pages/page-10.jpg',
    audioText: "Now, that is the story we share! If you enjoyed this story and are interested in a new life with our family in God’s Kingdom, you can join us today! Because Jesus has prepared everything you need to join the family, there is only one thing you need to do: accept his invitation by believing that he died for you. Once you accept His invitation, I encourage you to pray a prayer like this to declare your faith, ideally with another follower of Jesus: Our Father in heaven, we have sinned against you, bringing shame upon you and ourselves. I admit that I cannot save myself. Save us from our sins. Thank you for sending Jesus, our King, to remove the shame of our sin. Thank you for your plan to restore our honor. Thank you for welcoming us to join your family. We believe in the death of Jesus and his resurrection for our sins. Help us through the Holy Spirit to live a life of love, joy, peace, and kindness. In Jesus' name we pray, Amen.",
    keyWords: ['prayer', 'shame', 'restore', 'honor', 'resurrection', 'Holy Spirit', 'amen']
  },
  {
    pageNumber: 11,
    title: 'SCRIPTURE PROMISES & FRUIT OF THE SPIRIT',
    paragraphs: [
      "As a beloved member of God's household, remember these eternal promises given in God's word:"
    ],
    scriptures: [
      {
        reference: 'Romans 10:9',
        text: 'If you confess with your mouth that Jesus is Lord and believe in your heart that God raised him from the dead, you will be saved.'
      },
      {
        reference: 'Galatians 5:22-23',
        text: 'But the fruit of the Spirit is love, joy, peace, patience, kindness, goodness, faithfulness, gentleness, self-control.'
      }
    ],
    originalScan: '/book-pages/page-11.jpg',
    audioText: "If you confess with your mouth that Jesus is Lord and believe in your heart that God raised him from the dead, you will be saved. Romans 10:9. But the fruit of the Spirit is love, joy, peace, patience, kindness, goodness, faithfulness, gentleness, self-control; Galatians 5:22-23.",
    keyWords: ['confess', 'saved', 'patience', 'kindness', 'faithfulness', 'gentleness', 'self_control']
  }
];
