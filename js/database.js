
var lore = {
	
	hells:{
		
		pragaras:{
		
			page:1,
			name: "pragaras",
			image:"Hell1.jpg", 
			title:"First Hell : Pragaras",
			subtitle: " (Endless Waste) ",
			description:[
				
				" An Exterior of Hell also known to be the most poor and pathetic. It has no great planetary cities or dominions mostly ruins ruled by warbands, cults and survivors being near the Asteroid Galaxies is always under raids, curses, war and brutality the population is varied and almost nobody holds control for long. ",
				"",
				],

			skills:[

				{ field:"origin" , id:"pragaras" },
				{ field:"attributes" , id:"migth" },
				{ field:"penalty" , id:"pragaras"},

			],

			origins:{
				
				solo:{
			
					plusM: true,
					name: "Scavenger",
					type: "solo",
					description: [
					
					"Your Overlord commands a group of bandits which moves around Pragaras pillaging ruins, destroying minors Overlords enslaving survivors but mostly Running away from bigger and more powerful Overlords.",
					"Your Overlord is tired of the shitty life that he has. So he sends you to Uni so you can help him get a better life. After All the better it goes for him the more you will inherit. He its up for anything. New business, moving to another hell ect."
					],
					skills:[

						{ field:"origin" , id:"scavenger" },
						{ field:"premade" , id:"superSpeed"},
					],
				},	

				group:{
			
					plusM: true,
					name: "Chaos raider",
					type: "group",
					conditions:{

						combat1:"combat1",

					},
					description: [
					
					"Your Overlord is part of the chaos raiders which terrorize Pragraras as well as other hells, they even venture outside Cathonia in order to plunder their exotic goods. Your Overlord works with others and gets a share of the loot. The only reason they dont control Pragaras is because they are many clans of compiting Chaos raiders",
					"The Chaos Riders has two main objectives for you, either get Strong so you can be usefull in combat, or secure better trade routes and deals for their loot. If you can help your Overlord climb the ladder of his institucion that's always appreciated."
					],
					skills:[

						{ field:"origin" , id:"raider" },
						{ field:"premade" , id:"combatTraining"},
					],
				},	

				cult:{
			
					plusM: true,
					name: "Egne Cultist",
					type: "cult",
					description: [
					
					"You are part of The cult of Egne. The Serpent Queen, A very charming High Overlord, which is expanding very rapidly on Pragaras. Her Story is mostly unknown but is common knowledge that she is a powerful sorceress that can see the future and perhaps possesses some of the strongest spells in Seven Hells, including her poison...",
					"Your Queen unlike other Supreme Overlords Doesn't demand anything from you. She just wants you to love her, kill for her and destroy all other Idols. When you please her, she empowers you. Those who leave her embrace, taste her poison fangs..."
					],
					skills:[

						{ field:"origin" , id:"egne" },
						{ field:"premade" , id:"clairvoyance" },
					],
				},	

				other:{
			
					name: "Pirigrim",
					type: "other",
					plusM: true,
					description: [
					
					"Your Overlord is a Pilgrim of the Ancient order known as the “ Vagabonds “ He follows the footsteps of Deivas Seniles, which is thought by the order to be the supreme Overlord of Cathonia and beyond. Deiva Seniles sometimes takes the form of an old fragile traveling man with master of alquemy, and thus judges the people and correspond accordingly. Before Cathonia got corrupted the other pilgrims followed his example of simple live in order to achieve enlightenment. On the other hand the current Pilgrims are certain that Deivas got its power due to its penitence and such they follow the path to one day become like him.",
					"Your Overlord found you in the battlefield and he took care of you (Because is part of his path to power) and though you the way of the Vagabond. But his travels take him to a dangerous place so selling a relic he was able to send you to the university. He hopes you don't deviate from the path of the Vagabond ( Making other Vagabond is part of the path to power). "
					],
					skills:[

						{ field:"origin" , id:"pirigrim" },
						{ field:"premade" , id:"alquemy" },
					],
				},		
			},
		
			kindred:{
				one:{
				
					minusC: true,
					name: "Venias AchDemon/es",
					type:"one",
					description: "Venias Demons Lord evolved to survive with scarcity of resources (souls) plus the overload of problems even for Cathonia, that Pragaras is notorious for. They are feared scavengers that appear after fights as if it the death called them. Appearing out of thin air they come to steal the souls of the fallen and the spoils of the battle. All that is left to do is escape, or be consumed by their winds of death.",
					skills:[
						
							{ field:"racial" , id:"demon" },
							{ field:"unique" , id:"deathDance" },
							{ field:"premade" , id:"deathWind" },
							{ field:"penalty" , id:"cunning"},
					
					]
				},

				two:{

					conditions:{

						familiar:"familiar",

					},
			
					name: "Raganos Cathonian Witch/Warlock",
					type: "two",
					minusM: true,
					description: "The Raganos are masters of witchcraft, their Coven leaders hold a few of the 'good' parts of this hell. Since here there is little order even for Cathonia, they can do their massive sacrifices and genocides without much opposition. Amongst their powers are shapeshifting , animal forms and familiar companion.",
					skills:[
						
							{ field:"racial" , id:"cathonian" },
							{ field:"unique" , id:"animalTrasnformation" },
							{ field:"premade" , id:"familiar" },
							{ field:"penalty" , id:"migth"},
					
					]
				},

				three:{
			
					name: "Perkunas DarkGod/des",
					type: "three",
					conditions:{

						god:"god",

					},
					description: "This Corrupted Gods originally came from the Royalty of Lemeria at Asteroid Galaxies which in some ways they are more dangerous than Pragaras. A few thousand years ago some tribes changed loyalties and wishing to establish their pantheons on seven hells, conquer and enslave other Overlords, fighting even those who came from their original home land. They are famous for their battle progress and like any God control over their aura, but they are most famous for their red lightning.",
					skills:[


							{ field:"racial" , id:"god" },
							{ field:"unique" , id:"redLigthning" },
							{ field:"premade" , id:"cosmicFligth" },
							{ field:"penalty" , id:"ignorant"},
					
					]
				},

				four:{
			
					name: "Kaukas Thane",
					type: "four",
					description: "Forced to survive in Pragaras the Kaukas evolve to convert any scraps into deadly runetech. They are like to make traps and hide in holes, consuming those unlucky enough to fall. Living on Pragaras like Vermin and seeing the horrors of desperation made the Kaukas appreciate living to the point of avoiding direct combat.",
					skills:[
						
							{ field:"racial" , id:"thane" },
							{ field:"unique" , id:"scrapBungler" },
							{ field:"premade" , id:"trapper" },
							{ field:"penalty" , id:"coward"},
					
					]
				},

				five:{
			
					lost: "yup",																		
					name: "The Lost",
					type: "five",
					unique: "(Unique to Pragaras)",
					only: "pragaras",
					description: "The Lost are probably the last kindred you would expect to thrive in cathonia, which they don't. They came from a peaceful white very organized universe to expand their borders and give peace and love, well mainly colonize since their homeland is so peaceful and safe that they suffer from sobre population or something like that. Obviously they were quickly killed and or enslaved. Since apparently Pragaras Overlords captured someone important to them, they kept sending rescue parties which all met the same end. The Lost only have one saving grace, they learn fast. That's the only reason the race survived this long. With time away from home they lost their traits and connection to their homeland and adapted to live in Cathonia. Stealing, cheating and killing to survive. A few lost in Pragaras evolved enough to become Overlords. Only on the shitwhole of Pragraras it would be possible such aberration.",
					skills:[
						
							{ field:"racial" , id:"lost" },
							{ field:"unique" , id:"pureAdaptability" },
							{ field:"premade" , id:"genius" },
							{ field:"penalty" , id:"outcast"},
					
					]
				}
			}
		},

		helvede:{
		
			page:2,
			name: "helvede",
			image:"Hell2.jpg", 
			title:"Second Hell : Helvede",
			subtitle: " (Frozen Warfront) ",
			description:[
				
				" An Exterior Hell with many influences of Gods and Titans. Its characteristics are its temperatures sow low that can freeze the spirit ,  and a Warmonger culture that gets them into problems with all the neighbours including the other hells when they are not bussy killing eachother for the Supremacy of Helvede. ",
				"",
				],

			skills:[

				{ field:"origin" , id:"helvede" },
				{ field:"attributes" , id:"migth" },
				{ field:"penalty" , id:"cunning"},

			],


			origins:{
				
				solo:{
			
					name: "Mercenary Leader",
					type: "solo",
					description: [
					
					"Your Overlord Commands a Group of Mercenaries that figth for the highest bidder. Most of the times as cannon folder, frontline on the wars between higher Overlords.",
					"Your Overlord want his own planet to settle. So he sends you to Uni so you can help him get a better life. After All the better it goes for him the more you will inherit. He doesnt like other hells so much but is open to convincing.",
					],
					skills:[

						{ field:"origin" , id:"mercenary" },
						{ field:"premade" , id:"spearShield"},
					],
					plusM: true,
					minusC: true,
				},	

				group:{
			
					name: "Astral Order",
					type: "group",
					conditions:{

						astral:"astral",

					},
					description: [
					
					"Your Overlord is a Knight of The Astral Order, each representing one of the 24 dark constellations of Helvede also known as Harbingers of Doom.",
					"The Astral Order hidden purpose is independence from Seven Hells. But for that they first need to conquer the whole region. You can either join them as a Knight or as a Spy getting the contacts on Pandemonium for when the time's right."
					],
					skills:[

						{ field:"origin" , id:"astral" },
						{ field:"premade" , id:"astral"},
					],
										plusM: true,
					minusC: true,
				},

				cult:{
			
					name: "Yggdrasil Cultist",
					type: "cult",
					description: [
					
					"You Serve Ratatoskr prophet of Yggdrasil or the lost paradise, the goal is very simple die in glorious battle while pillaging, killing and raping all you can in life. Then instead of entering the Abyss you will go to Paradise.",
					"As a servant of Yggdrasil I think is your goal is pretty clear, become a killing machine worth of Paradise and destroy all enemies of the great prophet Ratatosk, who has brought back to life many comrades not worthy enough to enter paradise."
					],
					skills:[

						{ field:"origin" , id:"paradise" },
						{ field:"premade" , id:"berseck" },
					],
										plusM: true,
					minusC: true,
				},	

				other:{
			
					name: "Frost Kingdom",
					type: "other",
					description: [
					
					"You Overlord is from the independent Frost Kingdom where he serves the one and only true rulers of Helvede and soon the Whole Cathonia. The mighty Titan known as the ‘Frozen King’ whose aura is the very cold of Helvede legends say.",
					"Nobody knows the intentions of the Frozen king, you only know that whatever he commands you must comply. Although a very strict Tyrant He has very different than the  overLords and  has old values. He doesn't allow backstabbing or schemes only real combat. He expects real loyalty and in turn he treats his close underlying like comaraders. Break his trust or his rules and you will be frozen and displayed in the hall of traitors for all to see.. "
					],
					skills:[

						{ field:"origin" , id:"kingDecree" },
						{ field:"premade" , id:"spirtualFull" },
					],
										plusM: true,
					minusC: true,
				},		
			},
		
			kindred:{
				one:{
			
					name: "Pit ArchDemon/es",
					type: "one",
					description: "Although spread everywhere is here on Helvede pit Demons stopped being a servant class and became Pit Lords on the basics or their combat prowess. With that new freedom many evolved and learned how to lead and harness the dark Matter to extend only their bodies can support. They currently are the physically strongest demon kindred as well as being able to use dark matter in ways only they can.",
					skills:[
						
							{ field:"racial" , id:"demon" },
							{ field:"unique" , id:"behemot" },
							{ field:"premade" , id:"regenerationFactor" },
							{ field:"penalty" , id:"grotesque"},
					
					]
				},

				two:{
			
					name: "Cathonian Darkind",
					type: "two",
					description: "Darkind are notorious amongst Cathonians being the perfect killing machine used by Overlords in many planetary invasions. They have a very condense spirit as well as the curse of death itself. The Darkind are specially successful in Helvede since is part of Seven Hell most near to their homegalaxy as well as being in constant war.",
					skills:[
						
							{ field:"racial" , id:"cathonian" },
							{ field:"unique" , id:"deathCurse" },
							{ field:"premade" , id:"spirtualEnergy" },
							{ field:"penalty" , id:"cunning"},
					
					],
					minusC: true,
				},

				three:{
			
					name: "Aesir Dark God/des",
					type: "three",
					description: "One of the ruling Kindred on Helvede the Aesir corrupted from a long dynasty of warrior Titan Gods. Now the only glory they want is to be worshiped by all , sacrifices on their Names (Basically what most of the mythological Gods wants) Also they take joy on war and killing mainly killing. ",
					conditions:{

						god:"god",

					},

					skills:[
						
							{ field:"racial" , id:"god" },
							{ field:"unique" , id:"titanHeritage" },
							{ field:"premade" , id:"superStrength" },
							{ field:"penalty" , id:"cunning"},
					
					],
					minusC: true,
				},

				four:{
			
					name: "Jotunheim Thane",
					type: "four",
					description: "Jotunheim are the original of the Thanes, in touch with the ancient craft of the runes making and crushing opponets in combat and less on the new Machinery made up with those runes.",
					skills:[
						
							{ field:"racial" , id:"thane" },
							{ field:"unique" , id:"titanThane" },
							{ field:"premade" , id:"superResistence" },
							{ field:"penalty" , id:"tradicional"},
					
					]
				},

				five:{
			
					name: "Ice Draconian",
					type: "five",
					unique: "(Unique to Helvede)",
					only: "helvede",
					description: "The most tyranic of all Local Dragon species, the ice Draconians dominated and evolved to become the ruling Kindred amongst Draconias. Ice Draconias have their colosal Dragon form, Ice breath, and arcane affinity.",
					skills:[
						
							{ field:"racial" , id:"dragon" },
							{ field:"unique" , id:"eternalFrost" },
							{ field:"premade" , id:"trasmute" },
							{ field:"penalty" , id:"darkness"},
					
					],
					minusD: true,
				}
			}
		},

		tanakh:{
		
			page: 3,
			name: "tanakh",
			image:"Hell3.jpg", 
			title:"Third Hell : Tanakh",
			subtitle: " (Blood Mausoleum) ",
			description:[
				
				"An Exterior Hell, with heavy influence from the Crimson Moon Empire , its Characteristics are ultra greedy Overlords that want everything for themselves at any cost and build massive forts to defend their riches and power sources. They are fewer Overlords than in other hells but those few are either very old or with a dynasty well established and heavily fortified, athoud they are on bloody competition with each other they will crush anyone who tries to rise up on Tanakh.",
				"",
				],

			skills:[

				{ field:"origin" , id:"tanakh1" },
				{ field:"attributes" , id:"cunning" },
				{ field:"penalty" , id:"cursedCollection"},

			],

			origins:{

				solo:{
			
					name: "Crypt Emperor",
					type: "solo",
					conditions:{

						tanakh:"tanakh",

					},

					description: [
					
					"In Tanakh they are Only a few very powerful Overlords, thus all of Overlords of Tanakh are HighOverlords minimun by themselves. Your Overlord is one of those crazy powerful Emperors with lots of lands and even more treasures and slaves.",
					"You are a vanity project for your Overlord. So as long as you are doing better than others and you spend as little as possible is all good. Just forget to inherit anything anytime soon. And careful with the other Dark Princes of your Overlord.",
					],
					skills:[

						{ field:"origin" , id:"tanakh2" },
						{ field:"premade" , id:"rich" },
					],
				},	

				group:{
			
					name: "Tanakh Advisor",
					type: "group",
					description: [
					
					"Belphegor Tanakh is perhaps the most powerful but without any doubt the most influential Crypt Emperor.  Even the hell is named after him. That cocky Maligenii is the one that conquer third Hell for the Abyss but then decided to quit the military became a Crypt lord and stop paying taxes. He is so confident in himself that he is capable to delegate responsibilities to non-puppet Overlords acting as their advisers in charge of their particular area of expertise. Your Overlord is one of such advisers.",
					"You're sent to the academy you can better serve the Crypt Emperor. You have your suspicions that Belphegor he wants something from Abbadon or even the Academy for his collection. You could always find a way to help your Overlord and his mates overthrow Belphegor, most advisors are not particularly loyal but at the moment they are far away from plotting."
					],
					skills:[

						{ field:"origin" , id:"secrets" },
						{ field:"premade" , id:"craftMastery"},
					],
					conditions:{

						tanakh:"tanakh",
						craft1:"craft1",

					},

				},

				cult:{
			
					name: "Cult of Blood" ,
					type: "cult",
					description: [
					
					"Supreme Overlord Blood as he likes to call himself is the Oldest Crypt Emperor. This Immortal Vampire has here before this was seven hells, he was one of the first precursor of the eclipse, defeated the previous Gods and becoming one of First Overlords. He was defeated by Belphegor demon generals eons ago when the Abyss dominios expanded. He then retreated to his fortified Crypt which Belphegor attack was utterly crushed, then he built his own crypt and they have being Deathly Rivals ever since.",
					"Supreme Overlord Blood only desires one thing, to consume the blood of the strong, so he can be forever young, fresh and powerful. He sees potencial in you, so he will help you to become strong so that you help him hunt strong people and if you are bad at it well.. He can always drink you…"
					],

					skills:[

						{ field:"origin" , id:"bloodSacrifice" },
						{ field:"premade" , id:"dex" },
					],

					conditions:{

						tanakh:"tanakh",

					},

				},	

				other:{
			
					name: "Slaver",
					type: "other",
					description: [
					
					"Apart from Crypt Emperors and their underlings, Slavers and all other kind of interRegional traders are more welcome to have their base of Operations in Tanakh. They give a big percent of profit to the Crypt Emperors as well as helping them with their collections and far away luxury items. In exchange for some land protection.",
					"Your Overlord wants you to study, get interregional contacts and help him expand so that He one that can become a Crypt Emperors. Until that happens you must sometimes runs errands for the Crypt Emperors."
					],
					skills:[

						{ field:"origin" , id:"freePass" },
						{ field:"premade" , id:"merchant" },
					],

					conditions:{

						tanakh:"tanakh",

					},

				},		
			},
		
			kindred:{
				one:{
			
					type: "one",
					name: "Maligenii ArchDemon/es",
					description: "Maligenii Demons are self centered to the point of blindness, All that matters is them and their legacy. They will do anything to achieve their goals and most often than not they get crushed by their own pride but nothing is able to stop a Maligenii who was  able to secure a place of Power, having then the countless options that such privilege gives at his disposal.",
					skills:[
						
							{ field:"racial" , id:"demon" },
							{ field:"unique" , id:"unholyDetermination" },
							{ field:"premade" , id:"unflinching" },
							{ field:"penalty" , id:"deadlyPride"},
					
					]
				},

				two:{
			
					unique: "(Unique to Tanakh)",
					name: "Styx Cathonian Pharaon",
					only: "tanakh",
					type: "two",
					description: "Styx are a native Kindred of the Blood Moon Empire. They Enjoy guiding masses, to the construction of great monuments towards the Primal Chaos and Higher Overlords. Thus acting as intermediaries themselves and getting a share of the profit.",
					skills:[
						
							{ field:"racial" , id:"cathonian" },
							{ field:"unique" , id:"messiah" },
							{ field:"premade" , id:"telepaty" },
							{ field:"penalty" , id:"messiah"},
					
					]
				},

				three:{
			
					type: "three",
					name: "Akhet Dark God/des",
					description: "Although now you can find them mainly on Seven Hells they were a native Kindred of the Crimson empire area before it was an empire full of stinky Stynx Cathonians. They used to be one of the most powerful beings is the whole Cathonia eons ago before the great eclipse and the triumph of evil forces. Then all the decent Akhet died only the betrayers survived, now just a shadow of their former glory. They will do anything to survive. ",
					skills:[
						
							{ field:"racial" , id:"god" },
							{ field:"unique" , id:"massSacrifice" },
							{ field:"premade" , id:"leadership" },
							{ field:"penalty" , id:"migth"},
					
					],

					conditions:{

						god:"god",

					},

				},

				four:{
			
					type: "four",
					name: "Ethernal ArchLich",
					description: "This Previous Emperors found the solution to Eternal life through necromancy such understanding of death allowed them to remain in the realm even after their physical dead having realized their spiritual form. Now as Arch Liches they command legions of death and Increase their own Legacy which they will preserve for Eternity.",
					skills:[
						
							{ field:"racial" , id:"ethernal" },
							{ field:"unique" , id:"deathLord" },
							{ field:"premade" , id:"necromancy" },
							{ field:"penalty" , id:"marked"},
					
					]
				},

				five:{
					
					type: "five",
					name: "Crimson Vampire Lord",
					description: "Vampires, inmortal by nature, fierce hunters monsters of the nigth. The most dangerous amongst them the crimson reapers whose blood thirst cannot be ever quenched, they can devour an entire village just to quench their thirst. A few of this vampire Lords evolved further into the realm of demons and dark Gods and other evils where  they compete for influence and power. Wishing to control them all and make them live like farm animals for their delicious meals.",
					skills:[
						
							{ field:"racial" , id:"vampire" },
							{ field:"unique" , id:"secretBlood" },
							{ field:"premade" , id:"telekinesis" },
							{ field:"penalty" , id:"darkness"},
					
					]
				}
			}
		},

		naraka:{
		
			page: 4,
			name: "naraka",
			image:"Hell4.jpg", 
			title:"Fourth Hell : Naraka",
			subtitle: " (Metropolis of Excess) ",
			description:[
				
				"An Exterior Hell, This prosperous Hell has such high resources , defensive planets, servants and quality of life that the Overlords have time for extensive social life, art, recovery of lost culture and study advanced science. Due to its opportunity this hell host such high density of Overlords that they have learned how to live in society with shared armies making their fights more on the social level. Politics, lies, scandals, whatever is necessary to take out the competition.",
				"",
				],

			skills:[

				{ field:"origin" , id:"naraka" },
				{ field:"attributes" , id:"cunning" },
				{ field:"penalty" , id:"migth"},

			],

			origins:{

				solo:{
			
					name: "Magnate",
					type: "solo",

					description: [
					
					"Your Overlord has successful business he started from scratch thus having an aristocratic position in Naraka. ",
					"Your Overlord wants you to be successful in your own vocation (In Naraka is common that the Dark Princes do something different from their Overlords). He still would like for you to join his business. If you learn something useful Or start a new company for him. With the dangers of Cathonia one is not save even on Naraka so self defense is not a bad idea.",
					],
					skills:[

						{ field:"origin" , id:"magnate" },
						{ field:"premade" , id:"carisma" },
					],
				},	

				group:{
			
					name: "Research Division",
					type: "group",
					description: [
					
					"Your Overlord is member of the Research Division. A most highly educated groups of individuals that look to improve Naraka in all fronts, mainly through science, culture, art and all kinds of knowledge lost in the Great Eclipse.",
					"As a member of the research division you have being recommended to graduate from the university of Abbadon being the only other respectable sit of knowledge apart from the complex in Naraka where you are already graduated."
					],

					skills:[

						{ field:"origin" , id:"research" },
						{ field:"premade" , id:"student"},
					],

					conditions:{

						reserach:"research",

					},

				},

				cult:{
			
					name: "Worship of Infinity" ,
					type: "cult",
					description: [
					
					"The cult of Infinity is the official religion of Naraka, although some are more believers than others. Infinity is the one original energy which takes innumerable forms depending on the situation. The 10 creatures, the 20 primordials are all faces of infinity. Still those faces are considered unimportant in Naraka, which mainly worships the 7 Desires for daily life and the 4 Destructors for protection in case of war. Although you can worship all, is recommended to focus on one at the time for whatever is most important goal at the moment.",
					"The cult wants to expand outside of Naraka thus needs followers familiar with the danger in the other hells. Thus is wisely if you can graduate from the University at Abbadon."
					],

					skills:[

						{ field:"origin" , id:"infinity" },
						{ field:"premade" , id:"darkMaster" },
					],

				},	

				other:{
			
					name: "Special Ops",
					type: "other",
					description: [
					
					"Naraka Obviously is a very desirable place to conquer since is very rich in all kinds of resources. Special ops are part of the reason that won't happen any time soon. Naraka can have the Luxury of regional fund and regional army. Combined with their talents and technology and you get the Special Operatives of Naraka. Which can act as a spy, assassins and soldiers. Depending on its needs.",
					"You graduated on the special Ops Academy with Honors. Usually that means you would start working right away but instead they decided that for a talent like you the organization could pay your entrance on the University of Abaddon. Giving an invaluable education of the outside world so you could one day become a squat leader. If you refuse in the future you must pay the education plus interest."
					],
					skills:[

						{ field:"origin" , id:"advancedWeapons" },
						{ field:"premade" , id:"spy" },
					],

				},		
			},
		

			kindred:{
				one:{
			
					type: "one",
					name: "Balseraph ArchDemon/es",
					description: "Balseraph are long-term planners, they thrive in the mistakes of others often taking a passive reactive attitude they excel in the art of manipulation social or otherwise. Descending from a noble line of demons front lines might not be their places but their lies can become real as well as being the only race of demon that can use demon contract from birth.",
					skills:[
						
							{ field:"racial" , id:"demon" },
							{ field:"unique" , id:"lie" },
							{ field:"premade" , id:"demonContract" },
							{ field:"penalty" , id:"migth"},
					
					]
				},

				two:{
			
					type: "two",
					name: "Asura Dark God/des",
					description: "Unlike other Dark Gods they Asura were not corrupted they were always evil but with their particular code of honor. Having defeated the Local Gods they established the great City of Naraka, with nobility titles from its foundation and with their hands both on the government and military they enjoy a high position. Although powerful in battle the Asura prefer the conforms of a life of excess and luxury mostly found on the Fourth Hell. ",
					skills:[
						
							{ field:"racial" , id:"god" },
							{ field:"unique" , id:"asura" },
							{ field:"premade" , id:"meditacion" },
							{ field:"penalty" , id:"asura"},
					
					],

					conditions:{

						god:"god",

					},
				},

				three:{
			
					unique: "(Unique to Naraka)",
					type: "four",
					name: "Bes/eset Thane ",
					only: "naraka",
					description: "The Bes/eset are obsessed with technological advance. Fusing their innate RuneTech with the local science they created many things which now are the pillars of Narakas society, nothing in the whole seven hells can compare.",
					skills:[
						
							{ field:"racial" , id:"thane" },
							{ field:"unique" , id:"cybor" },
							{ field:"premade" , id:"inventor" },
							{ field:"penalty" , id:"darkness"},
					
					]

				},

				four:{
			

					type: "four",
					name: "Ethernal Djinn",
					description: "Very Little is known about this enigmatic old spirits, they have been there since Ancient times or perhaps before. All that is sure is that they were shackled and forced to serve the whims of the masters. Once the forces of Justice that governed caotica where defeated. All sorts of Evil spirits were freed, only to be enslaved again this time by the overlords at least most of them. The Djinns forced powerful temporal alliances with opposed overlords , evolved and secured high power and position on Naraka.",
					skills:[
						
							{ field:"racial" , id:"ethernal" },
							{ field:"unique" , id:"livingMatter" },
							{ field:"premade" , id:"create" },
							{ field:"penalty" , id:"lamp"},
					
					]
				},

				five:{

					conditions:{

						trengar:"trengar",

					},
					

					type: "five",
					name: "Raksasa High-Trengar",
					description: "The Raksasa are native kindred of Naraka although it terrorized everyone on ancient times. Since the evil forces dominated Cathonia they can be a part of society. Each Raksasa has a different ancestral animal that gives them unique skills allowing them to find success in a specific area of society. But if something applies to all of them is their affinity with dark arts..",
					skills:[
						
							{ field:"racial" , id:"trengar" },
							{ field:"unique" , id:"darkPact" },
							{ field:"premade" , id:"empower" },
							{ field:"penalty" , id:"cunning"},
					
					]
				}
			}
		},

		sheol:{
		
			page: 5,
			name: "sheol",
			image:"Hell5.jpg", 
			title:"Fifth Hell : Sheol",
			subtitle: " (Defiled Santuary) ",
			description:[
				
				"An Interior Hell where before was a paradise. Legends says it used to be the heaven where the good people of the region rest their eternity now… they are just slaves. Although long corrupted most demons and evil beings don't like the place because the sacred relics , monasteries and its many paradises, carry have some residual influence. Still Demons like the to experience the sexual corruptions available there...",
				"",
				],

			skills:[

				{ field:"origin" , id:"sheol" },
				{ field:"origin" , id:"enchanting" },
				{ field:"penalty" , id:"darkness"},

			],

			origins:{

				solo:{
			
					name: "Retired",
					type: "solo",
					

					description: [
					
					"Your Overlord once powerful and influential is now living a simple life in Sheol, farming crops which his/her multiple wifes and husbands, plus all the ‘free love around’. ",
					"He wants a peaceful live until he dies preferable ‘making love’ and you are a nuisance, he doesn't want you around and he doesn't want you death either. So he paid for your education. Only return for short visits.",
					],
					skills:[

						{ field:"origin" , id:"retired" },
						{ field:"premade" , id:"farmer" },
					],

						conditions:{

						legend:"legend",

					},
				},	

				group:{
			
					name: "Black Rose",
					type: "group",
					description: [
					
					"Your Overlord is part of the Black Rose, a guild of Dark Mages/Mafia that mainly deals with Slavers selling local beauties, for the Brothels of Naraka and Abbadon or the Harems of Tanakh and Helvede. They search for hidden sanctuaries, corrupt their relics and sell them. Finally they destroy the natural paradise of Sheol in order to mass produce Power drugs that suck the life of Entire planets, Thus they are hated by the natives of Sheol but others especially in Naraka appreciate their services.",
					"You are promising , so your Overlord agrees to pay for your studies, although you will have to pay him later. What to learn is very broad since, the mafia requires all kinds of talents, businessman, brutes, hunters. Once part of the Black Rose is very hard to leave since you are bound to its leader."
					],

					skills:[

						{ field:"origin" , id:"rose" },
						{ field:"premade" , id:"subdue"},
					],

				},

				cult:{
			
					name: "Cult of Mayari" ,
					type: "cult",
					description: [
					
					"Mayari is one of the most influential Entities on Sheol. She is the only survival of the Original Goddesses. Always neutral in nature is not about good or evil but live and primal instinct.",
					"Their followers try spread her teachings which are connection with nature, total freedom and following your instincts. In a normal scenery they would be viewed as evil but their respect for the value of life makes them one of the “better” factions in seven hells. They are appreciated for their open entry orgies."
					],

					skills:[

						{ field:"origin" , id:"mayari" },
						{ field:"premade" , id:"shaman" },
					],

				},	

				other:{
			
					name: "Twilight Avengers",
					type: "other",
					description: [
					
					"The Remnants of the forces of light, eons without a purpose only anger in their heart, they hid amongst the ruins saving war orphans from all kindred, passing upon them their feelings and mission. Now under a new leadership they come again to reclaim Sheol as a bastion of light or at least die while killing as many Overlords as they can.",
					"The Twilight Avengers although mainly composed of ArchDemons, Dark gods, Cathonians , Eternals and Similar Corrupted kindred, they were mostly born and raised under its Doctrine, they hate what Sheol has become and wish to change it. The Avengers are smart to know that they do not possess the man-power for a war not even to destroy the Black Rose. Therefore they will play it smart, reproducing helping others in need passing the doctrine, "
					],
					skills:[

						{ field:"origin" , id:"eclipse" },
						{ field:"premade" , id:"smite" },
					],

				},		
			},
		

			kindred:{
				one:{
			
					type: "one",
					name: "Succubus/Incubus ArchDemon/es",
					description: "Also known as the Tempting demons, they used to be and in many places still are a low class demons but here in Sheol they were the ones to win the war by corrupting the very nature of Sheol and many of their Archangels, although primarily related to sensuality they can do many subtle things and particularly enjoy entering the dreams of their victims.",
					skills:[
						
							{ field:"racial" , id:"demon" },
							{ field:"unique" , id:"shapeShifting" },
							{ field:"premade" , id:"hypnosis" },
							{ field:"penalty" , id:"migth"},
					
					]
				},

				two:{
			
					type: "two",
					name: "Nephilim Dark God/des",
					description: "The Nephilin were once the rebel celestials, heroes and rebels sons of daughters of the previous gods of light. Since the gods of light were defeated and die on the war, the rebel Nephilins inherited their post. Ironically since their whole civilization collapsed they found a more primal way to live more in touch with nature, some more humbled other resentful of lost and other happy to live in the world. ",
					skills:[
						
							{ field:"racial" , id:"god" },
							{ field:"unique" , id:"relic" },
							{ field:"premade" , id:"awareness" },
							{ field:"penalty" , id:"good"},
					
					],

					conditions:{

						god:"god",

					},
				},

				three:{
			
					conditions:{

						element:"element",

					},
					type: "three",
					name: "Ashen Corrupted Primordial",
					description: "The Primorial, always lived in harmony with the forces of god, beinn themselves the guardians of nature and life. Ofc course that means they were also killed, all but the dark Primoldials who choose to ally themselves with the Dark Forces in exchange for power. They now are part of the rulers of Sheol.",
					skills:[
						
							{ field:"racial" , id:"primordial" },
							{ field:"unique" , id:"ashen" },
							{ field:"premade" , id:"element" },
							{ field:"penalty" , id:"darkness"},
					
					]

				},

				four:{
			

					type: "four",
					name: "Ethernal Sprites/Nymph ",
					description: "Sprites and Nymph are spirits considered evil in the old times, since they followed their primal instincts, thus tempting others to abandon their vows and join them in freedom. After the fall of Sheol, its paradises became the perfect pastures for their mischeves.",
					skills:[
						
							{ field:"racial" , id:"ethernal" },
							{ field:"unique" , id:"fury" },
							{ field:"premade" , id:"trick" },
							{ field:"penalty" , id:"darkness"},
					
					]
				},

				five:{

					
					unique: "(Unique to Sheol)",
					type: "five",
					only: "sheol",
					name: "Cathonian Fallen ArkAngel",
					description: "While all other kinds of angels were killed or tortured and enslaved, definitely raped before anything. Some ArkAngels were powerful enough to switch sizes on time betray their comrades and secure a powerful position in the new order, well more like the new chaos. They still conserve the same power of connection the Primal entities. After the great war many system and universes merged into Cathonia, Sheol included thus Technically making Archangels Cathonias as well, After an Eternity of celibacy they now overcompensate giving in to their carnal desires with much more intensity than their fellow demons.",
					skills:[
						
							{ field:"racial" , id:"cathonian" },
							{ field:"unique" , id:"angel" },
							{ field:"premade" , id:"bless" },
							{ field:"penalty" , id:"angel"},
					
					]
				}
			}
		},

		abaddon:{
		
			page: 6,
			name: "abaddon",
			image:"Hell6.jpg", 
			title:"Sixth Hell : Abaddon",
			subtitle: " (Demon Kingdoms) ",
			description:[
				
				"An Inner Hell Abbadon is the home of Some of the Most powerful DemonLords as being the political center of Seven Hells, from here they collect taxes, Establish policies that must be followed by the rest of the Hells if they don't want to be destroyed. Many times other Overlords of other Hells revolt but it always ends up in defeat since is in on the interest of the higher ups that all Overlords of Seven Hells pay their taxes to the Royal Demons as well as paying their own taxes to their superior Overlords… Anyways Cathonia is not a place for mercy or easy life. In Abbadon Demon Lords compete to become the Royalty that serves under the High Overlord that serve the Supreme Overlords that are true rules of The Seven Hells and beyond.",
				"Pandemonium is the Most Important City of Seven Hells as well as being the place where the university for Dark Princes of all Seven hells is situated. Being a multicultural city with interactions with all hells and beyond is 'Neutral'.",
				],

			skills:[

				{ field:"origin" , id:"abaddon" },
				{ field:"penalty" , id:"no"},

			],

			origins:{

				solo:{
			
					name: "Lord",
					type: "solo",
					

					description: [
					
					"Your underlord has a nobility title and some planets on Abbadon, he struggles with having an economy since the taxes to the Royals are high, other Lords want his lands, everytime he needs bigger armies to collect taxes and the tension with other hells is ever increasing. ",
					"Your overlord wants to become a Royal and for that he needs more power and influence, you will either help him becoming competent or he will marry you for political reasons, either way is better if you had a prestigious education.",
					],
					skills:[

						{ field:"origin" , id:"lord" },
						{ field:"premade" , id:"servant" },
					],

						conditions:{

						legend:"legend",

					},
				},	

				group:{
			
					name: "Demon Syndicate",
					type: "group",
					description: [
					
					"Your Overlord is part of one of the most influential organizations in seven hells, only behind the Royalty and The Higher regional overlords. The Syndicate was formed just a few decades ago in order Purge the foreigners influence and bring back the power to where it belongs to the Demons, since the Royalty has being corrupted giving nobility titles to such rats like Lucifer, an angel!, even giving them the custody of Pandemonium. No things cannot remain like this otherwise Seven hells will become like the rest of Cathonia, feeding grounds for titans… while demons became slaves again.",
					"Obviously you are going to help detrone Lucifer MorningStar while titing to recruit other students to the cause. Non-Demos are welcome to the Syndicate as long as they accept that Demons are the true rulers of Seven Hells. But if you are a non-demon dont expect to climb in the syndicate you will be a grunt for life."
					],

					skills:[

						{ field:"origin" , id:"demon" },
						{ field:"premade" , id:"contact"},
					],

				},

				cult:{

					luci: "yes",
					name: "Satanic Curch" ,
					type: "cult",
					description: [
					
					"The Satanist Curch athoud small is quite influential since their deity is Lord Lucifer Morningstar the Current Overlord of Pandemonium of Abbadon. He directly manages the most important city and like other royals works for the Abyss. But before that he started a cult to gain some power and destroy his competence. Now he is a bit distanced from his cult but still from time to time he claims some virgins and gives some dark missions , mostly his dirty work that he cannot directly do with his current army.",
					"Since Lucifer founded the University of Dark Arts in Pandemonium is basically free for the son of a Satanic Master of rituals any high post to study there. Lucifer is all about you doing you and he doesn't get too much involved in your life, unless he has a dark mission. But he is ruthless when it comes to treason. He will torture for the rest of eternity without the rest fo death."
					],

					skills:[

						{ field:"origin" , id:"satan" },
						{ field:"premade" , id:"summon" },
					],

				},	

				other:{
			
					name: "Royal Enforcer",
					type: "other",
					description: [
					
					"The Royal Families rule over all Seven Hells, at least in theory. When any powerful overlords seems to forget this fact thus refusing to pay taxes or even declaring themselves independent from Abaddon, The Enforcers are sent upon them, brutes, tax collectors, army generals whatever the situation demands they are there to serve the Royal High Lords and the Interest of the Abyss",
					"You have been chosen to become an Enforcer since you seem smart and dextrecious it has being decided for you to be the recruit of this year that enlist in the Academy, since it doesn't hurt to know dark arts and basically all important things about how to survive in Cathonia. Remember the faces of the student you might collect their taxes some day. "
					],
					skills:[

						{ field:"origin" , id:"royal" },
						{ field:"premade" , id:"control" },
					],

				},		
			},

			kindred:{
				one:{
			
					type: "one",
					unique: "(Unique to Abaddon)",
					only: "abaddon",
					name: "Imperial ArchDemon/es",
					description: "Imperial Demons used to be long time ago the ruler class amongst the demons, now all sorts of demons have evolved to become Demons Lords or higher, Imperial still preserve some of their influence especially in Abbadon where they are the most common Royals that serve the interest of the Abyss and regulate the whole Seven Hells. Their main characteristic is their royal mark.",
					skills:[
						
							{ field:"racial" , id:"demon" },
							{ field:"unique" , id:"imperial" },
							{ field:"premade" , id:"bolt" },
							{ field:"penalty" , id:"ego"},
					
					]
				},

				two:{
			
					type: "two",
					name: "GodBeast Rider ArchDemon/es",
					description: "This powerful demons who were previously knights of the imperials evolved on their own and now ocupate prominent positions in Abaddon in many cases as Royal serving the high overlords as well. But more often they prefer to act is royal enforcers, Their unique legacy is that they domesticated GodBeasts. Now having a depth bound with them and riding them into battle. ",
					skills:[
						
							{ field:"racial" , id:"demon" },
							{ field:"unique" , id:"beast" },
							{ field:"premade" , id:"pet" },
							{ field:"penalty" , id:"beast"},
					
					],

					conditions:{

						god:"god",

					},
				},

				three:{
			
					
					type: "three",
					name: "Ethernal Shadow Demon",
					description: "Shadow Demons are first servants of hell, many overlords use them as minor demons but a faction of those Evolved to become Overlords and acquiring good positions of their own. Their are both feared and seeked out for their mobily.",
					skills:[
						
							{ field:"racial" , id:"demon" },
							{ field:"unique" , id:"shadow" },
							{ field:"premade" , id:"teleport" },
							{ field:"penalty" , id:"migth"},
					
					]

				},

				four:{
			

					type: "four",
					name: "Abadonian Thane Gargoyle ",
					description: "Eons ago the Thanes of Abaddon experimented on themselves, trying to fuse with demons in order to become the ultimate Kindred, they failed to gain control over dark matter but instead transformed into demon-looking creatures with new strange effects due to the mixture of Obsidian Runes, Demon blood and souls. They helped to found Abaddon, gaining a lot of power and influence on the process, following the Imperial Demons they too think they are the superior kindred but they prove it with fists not words.",
					skills:[
						
							{ field:"racial" , id:"thane" },
							{ field:"unique" , id:"gargoyle" },
							{ field:"premade" , id:"figther" },
							{ field:"penalty" , id:"darkness"},
					
					]
				},

				five:{

					type: "five",
					name: "Cathonian Devil",
					description: "This Ruthless creatures lived alongside demons since time immemorial, they thrived by corrupt good into evil, now instead they like to change loyalties of others, make sure others betray their overlords and dark masters. In essence nothing good comes from Devils only chaos and destruction. Thus they can be useful tools, temporary allies and powerful Overlords.",
					skills:[
						
							{ field:"racial" , id:"cathonian" },
							{ field:"unique" , id:"devil" },
							{ field:"premade" , id:"pervert" },
							{ field:"penalty" , id:"devil"},
					
					]
				}
			}
		},
		
		infernos:{
		
			page: 7,
			name: "infernos",
			image:"Hell7.jpg", 
			title:"Seventh Hell : Infernos",
			subtitle: " (Burning Depths) ",
			description:[
				
				"Infernos sometimes called the hell of hells is the deepest place on Seven hells, it has network of portals that go to all Seven hells and directly connects them with the Abyss. Infernos by itself is very wild and uncivilized apart from the Huge forts directly in control of High Overlord. Its biggest characteristics are the high temperatures and its main ocupacions is torture of souls in order to extract dark matter.",
				"The Abyss is a mystery for most Overlords what to speak of the rest of citizens of Seven Hells. Its known Primal Demons and Supreme overlords reside there in the deepest dimensions of the Abyss. It is also known that the Abyss connects to all other Demon Dominions in all other Cathonia and even Beyond Cathonia. Basically Seven Hells is a small pond in comparison to the Ocean which is the abyss.",
				],

			skills:[

				{ field:"attributes" , id:"darkness" },
				{ field:"origin" , id:"infernos" },
				{ field:"penalty" , id:"infernos"},

			],

			origins:{

				solo:{
			
					name: "Bounty Hunter",
					type: "solo",
					

					description: [
					
					"Yor Overlord uses the portal to his advantage killing Overlords,  marked by the Abyss usually by Death or just ‘borrowing’ item for their own interest. You don't want to be the target of a Bounty Hunter, since you cannot escape and you must certainly cannot pay more than the Abyss… ",
					"You are too weak to help your Overlord in his mission and he doesn't want to teach you himself  since you could prove a fatal weakness if he has to be there to protect you. Luckily he can send you to the University.",
					],
					skills:[

						{ field:"origin" , id:"bounty" },
						{ field:"premade" , id:"hunter" },
					],
					plusD: true,

					
				},	

				group:{
			
					name: "Gate Keeper",
					type: "group",
					description: [
					
					"The GateKeepers are Might Overlords with huge kingdom and armies in charge of defending the gate, so nobody enters to the Abyss without permission and most importantly, so that the not so friendly forces of the Abyss face some kind of a wall giving time for the High Overlords to Act in order to protect their Valuable possession, which is Seven Hells.",
					"Gatekeeper don't care so much about the small game, instead they do their job so that one day they can directly become a High Overlord. They have no use for Dark Prince but some of them care enough to raise their children and then give them a good education so they have hopes of surviving. If you ever become an Overlord you could always join the GateKeepers..."
					],

					skills:[

						{ field:"origin" , id:"gate" },
						{ field:"premade" , id:"barrier"},
					],
					plusD: true,

				},

				cult:{
			
					name: "Void Cultist" ,
					type: "cult",
					description: [
					
					"The void is a very powerful entity from the Abyssthat was able to break through the gate guardians and expand its influence into Seven Hells. Now quickly gaining followers on Infernors.",
					"Void cultist like most cultist want to expand its faith. And you were chosen to receive high education for that particular purpose."
					],

					skills:[

						{ field:"origin" , id:"void" },
						{ field:"premade" , id:"antimage" },
					],
					plusD: true,

				},	

				other:{
			
					name: "Elder Order",
					type: "other",
					description: [
					
					"This Ancient order old as the Abyss itself. They are there to fullfile directly the desires of the True rulers of Seven Hells Beyond the Abyss.",
					"You only know the order needs you in the University, they have some mysterious plans for you to execute."
					],
					skills:[

						{ field:"origin" , id:"order" },
						{ field:"premade" , id:"master" },
					],

						conditions:{

						master:"master",

					},
					plusD: true,

				},		
			},

			kindred:{
				one:{
			
					type: "one",
					name: "Flame Lord ArchDemon/es",
					description: "Firelords evolved from flame imps into a much more powerful variance their control of hellfire is unparalleled. Mostly the rule on Infernos since no other kind of Demon has its affinity with fire.",
					skills:[
						
							{ field:"racial" , id:"demon" },
							{ field:"unique" , id:"flame" },
							{ field:"premade" , id:"hellFire" },
							{ field:"penalty" , id:"flame"},
					
					]
				},

				two:{
			
					type: "two",
					name: "Infernal Thane",
					description: "Infernal Thanes are the ones that travel to Infernos in order to be near the Abyss and the eternal flames, were they successfully mixed darkness with their runes.",
					skills:[
						
							{ field:"racial" , id:"thane" },
							{ field:"unique" , id:"infernal" },
							{ field:"premade" , id:"curses" },
							{ field:"penalty" , id:"infernal"},
					
					],

				},

				three:{
			
					
					type: "three",
					name: "Ethernal Reaper",
					unique: "(Unique to Infernos)",
					only: "infernos",
					description: "There is nothing more feared than a reaper, this kindred appears like cloaked shade and wields a scythe always eager to kill those that have being marked by the Abyss.",
					skills:[
						
							{ field:"racial" , id:"ethernal" },
							{ field:"unique" , id:"reaper" },
							{ field:"premade" , id:"scythe" },
							{ field:"penalty" , id:"cunning"},
					
					],
					minusC: true,

				},

				four:{
			

					type: "four",
					name: "Cathonian Soul Flayer ",
					description: "Even if you are an Atheist pray that you won't ever be tortured by a soul flayer. Their connection with pain is as deep as the Abyss and they love every second of it.",
					skills:[
						
							{ field:"racial" , id:"cathonian" },
							{ field:"unique" , id:"soulFlayer" },
							{ field:"premade" , id:"torture" },
							{ field:"penalty" , id:"migth"},
					
					],
					minusM: true,
				},

				
				five:{
			
					name: "Black Draconian",
					type: "five",
					description: "Natives of the Void this Draconians enjoy hiding their treasures on the remote Volcanic Caves and Void Gates at Infernos. They Are for the most part highly resistant to any magic and mind attack, while being able to transform into a powerful Dragon form",
					skills:[
						
							{ field:"racial" , id:"dragon" },
							{ field:"unique" , id:"voidD" },
							{ field:"premade" , id:"enchantD" },
							{ field:"penalty" , id:"hoarder"},
					
					],
				}
			}
		},
		
	},
	
	
	
	
	
	
	
	
	
	












	skills:{

		info:{

			image:"Skills.jpeg", 
			title:"Help:",
			subtitle: "",
			description:[
				" 1) First do the Attributes , then Origins Done? Great! Now choose skills using the stars on the attributes.",
				" 2) Skills are divided into three groups each represented by an Attribute: (Might, Cunning, Darkness)",
				" 3) Each group can only use the stars from its Attribute in order to unlock starting skills.",
				" 4) DarkPrince skills cost 1 star(*) and are the most efficient for their cost.",
				" 5) Upgrading a DarkPrince skill to an Overlord Level cost 2 stars(*) it becomes more or less twice as good, so is not as efficient but helps you to focus.",
				" 6) Legendary skills cost 3 stars(*) these skills are all about personalizing your character thus giving you cool perks at a great star cost... Choose with care.",
				" 7) Some skills like 'Demon contract' are unique, and can only be selected with the right kindred, in this case ArchDemon.",
				" 8) If you need an extra star(*) but don't want to change your previous settings you can always select a penalty.",
				" 9) Have fun!.",
			],

			migth:{

			one:"Superior Being",
			two:"Special Individual",

		},

		cunning:{

			one:"Advategous Aptitudes",
			two:"Arkane and Mind",

		},

		darkness:{

			one:"Dark Arts",
			two:"Others",

		},

		}, 

		origin:{
			
			pragaras:{
				
				field:"Origin",
				title:"Endless Survival",
				quotes:"I come from the worst of the worst.",
				description:"You can find sources of nourishment, power, and safety in most places as well as detecting possible hostile forces, traps and curses.",
			},

			helvede:{
				
				field:"Orgin",
				title:"Warmonger",
				quotes:"The Battlefield is my home.",
				description:"You have fought countless battles, you can read the flow as well as having high stamina that allows extended combat",
			},

			tanakh1:{
				
				field:"Orgin",
				title:"SoulTyrant",
				quotes:"All that is yours is mine, mine alone! Well I can share missfortune in fact take mine as well…",
				description:"You can give and take status effects from the living souls you have control over, even death) (basicly you can have others training for you, and take any damage you suffer. Keep in mind if you are stronger you will need a larger quantity of servants to do so.",
			},

			tanakh2:{
				
				field:"Orgin",
				title:"Abyssal Vault ",
				quotes:"My things are protected at home but I can use them anywhere!",
				description:"You have access to the Vault of your overlord where you can keept things and teleport them to you.",
			},

			scavenger:{
				
				field:"Origin",
				title:"Lucky Pest",
				quotes:"I'm still here somehow...",
				description:"In desperate situations usually you get a last chance opportunity or a new possible solution.",
			},

			raider:{
				
				field:"Origin",
				title:"Guerrila Wars",
				quotes:"Smart Warfare",
				description:"You are used to fight stronger opponents using the environment and their weakness ) ( Battle Tactics , Scouting and Combat Experience",
			},

			egne:{
				
				field:"Origin",
				title:"Serpent Curse",
				quotes:"The strongest poison of seven Hells",
				description:"You can impart the curse of Egne, poisoning your target. The more deep your favour with Egne the stronger the poison.) (You can choose lethal that focuses on killing or none lethal that focuses on incapacitating the target",
			
			},

			pirigrim:{
				
				field:"Origin",
				title:"Path of the Vagabond ",
				quotes:"I have nothing so I will have everything",
				description:"The bases are: You cannot possess more things that what fits in a folded blanket, you must travel to all shrines were Deivas appeared thus mastering the art of alquemy. Bonus points for sacrificing for others, converting people in the path and being celibate) ( You dont know what are the benefits most of the piligrims were already powerfull as Overlord that either lost what they had or they seek the legend.",
			},

			mercenary:{
				field:"Origin",
				title:"Phalanx",
				quotes:"Five fingers make a fist",
				description:"The only way you survived this long fighting on the Vanguard is that you mastered Highly defensive combat style and teamwork lots of teamwork and it goes without saying clashing.",
			
			},

			astral:{
				
				field:"Origin",
				title:"Constelation of Doom",
				quotes:"The power is on the stars",
				description:"You have access to the Astral Magic and blessings of a particular dark constelation)(You can use its powers anywhere but you can only improve them at Helvede",
			},

			kingDecree:{
				
				field:"Origin",
				title:"Kings's Decree",
				quotes:"Cowards will freeze to death!",
				description:"The frozen king doesn't like when his subordinates are target of schemes , plots and cowardly acts. If you survive such kind of attack He will greatly infuse you with his titanic powers helping you regenerate and curse your attacker if you know who he is. But in direct combat he does not intervene, your problem if you are weak.",
			},

			paradise:{

				field:"Origin",
				title:"The Path",
				quotes:"Paradise is at the end of a road carved by blood.",
				description:"If your way of living pleases the prophet, he will bring you back to live until you quality to enter paradise ) ( He will only bring you back if is posible to him and you are promesing, so do lots of killing, raping and pillaging but specially to the enemies of the Prophet of course",

			},

			secrets:{

				field:"Origin",
				title:"Secret Knowledge",
				quotes:"Suhss is a secret",
				description:"Turns out the collection of Belphegor is books. He has a personal library comparable to the one nf the Academy of Dark arts in Pandemonium. You have access to it.) ( Since you studied there whatever your Craft Mastery was you will be a GrandMaster with secrets only known to you and your Overlord",
			},

			bloodSacrifice:{

				field:"Origin",
				title:"Blood Sacrifice",
				quotes:"Power trougth blood",
				description:"Since Supreme OverLord Blood has a rush for you to become powefull he gave you his migthy skill. When you sacrifice somebody through this process his soul becomes 2 to 3 times more valuable and you gain his memories, helping you to learn his skills and experiences.",

			},

			freePass:{

				field:"Origin",
				title:"Free Pass",
				quotes:"When you have what everyone wants...",
				description:"Good slavers are welcome anywhere, You will have no problem and open doors with most Overlords unless you screw things yourselve. You also know many VIP places",
			},

			naraka:{

				field:"Origin",
				title:"Advanced Society",
				quotes:"Peace is actually not that bad....",
				description:"You are used to the high level of technology of Naraka, as well as Having met more people and things that anyone from other Hell will meet in their Lives, Giving you a much superior taste, references, knowledge of various topics and personal hygiene make you pleasant to be with.",
			},

			magnate:{

				field:"Origin",
				title:"Privileged Life",
				quotes:"I have a good life",
				description:"Your Overlord likes provides for you, He can give you money as long as is a good investment either in your education or business. He will help out if you get into trouble. And he will use his contacts and abilities if you have special needs.) ( He won't let you have his fortune or handle his money for personal expenses. He gives a pay monthly pay for that. Neither he will sacrifice his life for you",
			},

			research:{

				field:"Origin",
				title:"Advanced Studies",
				quotes:"I have a PhD !",
				description:"Choose some specific advanced knowledge to be great at. You can just tell me what you would like to do instead of the name of the study) ( Good examples if you don't have anything in mind are  Soul Surgeon , Advanced Anima Manipulation, History of the Dark Arts , Theology of the Ancient Pantheons, Master of Gladiatorial Patronus, TecnoRunic Engineer.",
			},

			infinity:{

				field:"Origin",
				title:"True Faith",
				quotes:"I belive!",
				description:"You really put your whole being your hearth and mind into your worship, giving a great bonus in any deal with a Master that appreciates faith, also you migth inspire others with your convictions, scoring even more points with your choosen deity.",
			},

			advancedWeapons:{

				field:"Origin",
				title:"Advanced Weapon/Equipment",
				quotes:"Dont bring a knife to a gun figth",
				description:"You know how to use, advanced weapons, of bullets, lasers, plasma or runes. As well as understand informatics, camaras, hacking, and satellites. Having Access to many of those.",
			},

			sheol:{

				field:"Origin",
				title:"Corrupted Ligth",
				quotes:"You cannot corrupt the corrupted",
				description:"Resistance to any kind of Dark Arts) (It also makes using dark arts safer!",
			},

			retired:{

				field:"Origin",
				title:"Legendary Technique",
				quotes:"Full Counter! Chidori-Rasengan!",
				description:"Create your own super cool technique that you inhertied from your Overlord ) ( If lazzy to create, you can always choose something from an anime",
			},

			rose:{

				field:"Origin",
				title:"Dark Magic",
				quotes:"I pay the price in mana",
				description:"As a member of the Black Rose you have received the Tattoo of his leader, Avaak a very powerful Archmage. In exchange for your services and loyalty he corrupted your mana to such a degree that you perform all kinds of Dark arts using mana, as well as empowering or own Arkane magic with Darkness.) (Results still depend on your mana so you might have to sacrifice or pay soul for stronger effects",
			},

			mayari:{

				field:"Origin",
				title:"Free Spirit",
				quotes:"Mayari is understanding",
				description:"Your Shamanism is ugraded to an Overlord level on top of that is not considered a darkArt since you connect with the nature itself not the Chaos. ) ( Mayari has no problem if you worship other masters or join other cults.",
			},

			eclipse:{

				field:"Origin",
				title:"Ecplise",
				quotes:"The light becomes Darknes",
				description:"Only the Twilight avengers are able to use the power of the light masked in darkness thus having no repercussions with the Primal Chaos) ( That means you can also use holy and blessed equipment if you find them..., carry relics and live or hide in sacred places",
			},

			enchanting:{

				field:"Origin",
				title:"Enchanting",
				quotes:"There is something irresistible about you",
				description:"You awake primal desires in others, giving you bonus to interations with those attracted to you",
			},

			abaddon:{

				field:"Origin",
				title:"Might and Magic",
				quotes:"I will crush you with my plan using the power of Darkness",
				description:" The inhabitants of Abaddon excel a bit in everything thus gaining one flexible skill point on all three attributes. Migth, Cunning and Darkness.",
			},

			lord:{

				field:"Origin",
				title:"Seal of Power",
				quotes:"Bow down before me.",
				description:"Being Abbadonian Nobility you have a seal of power that allows you to exert domination into any soul that is below yours in quality, useless is directly in control by someone more powerful than you. You can also summon lower demons from your army, ranging from Imps to Doom guards.)  (Your Servant is a first class butler/Veteran warrior quilified so serven even an Overlord.",
			},

			demon:{

				field:"Origin",
				title:"Red Brotherhood",
				quotes:"Daemon Vinci!",
				description:"If there is something that differentiates demons and other dark creatures is their ability to work together if there is cause that will give benefits to all. You have access to the red network, of information, contraband, mercenaries, you name it the syndicate will provide at family price",
			},

			satan:{

				field:"Origin",
				title:"Dark Ambassador",
				quotes:"Ave Satanis!",
				description:"Lucifer is one of the most powerful Dark Arts users, not only has he a very deep connection with the Abyss but also being a fallen angel, basically a Cathonian has access to the Primal chaos itself. Satanist worship Lucifer Metamorphosis of darkness having drunk his blood in order to be part of the cult.) ( Gains one extra Darkness and all your Darkness abilities are more powerful. ",
			},

			royal:{

				field:"Origin",
				title:"Chosen",
				quotes:" I'm the Champion of Darkness",
				description: "You are an actual accet for the High Overlords and is in their best interest to keep you alive. They performed an empowering ritual in you that makes you stronger and harder to kill, if you still die then you were not so great anyways…) ( Also Overlords will think twice before killing you since they can see you belong to the Enforcers",
			},

			infernos:{

				field:"Origin",
				title:"Portal trougth the Abyss.",
				quotes:"One step, thousand miles.",
				description:"You can open and travel through small Abyss rifts, to any destination in Seven hell or any other Demon Dominion that you have knowledge off",
			},

			bounty:{

				field:"Origin",
				title:"Soul Track",
				quotes:"Every soul is unique",
				description:"Bounty hunters can track their marked souls as well as the soul of anybody who they met, knowing their exact location and if near, they can sense if the enemy has confidence to live or fear of death.",
			},

			gate:{

				field:"Origin",
				title:"Abyssal Atmosphere",
				quotes:"Is so easy to move outside!",
				description:"Having to guard the gates to the Abyss infernos, keepers live and train in a very heavy atmosphere in comparison to the rest of the Seven Hells. Making it easier to use physical and magical skills outside and removing the debuff of similar atmospheres.",
			},

			void:{

				field:"Origin",
				title:"The Void",
				quotes:"This is my domain",
				description:"You create a void around you, all mana and mental skills are stronger while all physical and spiritual skills are weaker.",
			},

			order:{

				field:"Origin",
				title:"Dark Pantheon",
				quotes:"I serve them all!",
				description: "Your Dark Master skill has improved to an Abyssal level and you can have many masters without any penalty.",
			},

		},


		




		racial:{
			
			demon:{
				
				field:"Racial",
				title:"Demonic Surge",
				quotes:"Only we know the truth Darkness of the soul.",
				description:"Demons can extract Dark Anima from souls and use it to empower any other skill greatly increasing its effect, you can also empower basic bodily functionality like sigth or regeneration) (Result depends on the power of the soul)(Soul is lost after use"
				
			},

			god:{
				
				field:"Racial",
				title:"Aura of Control",
				quotes:"All souls are under my control",
				description:"Choose any tribe, element, idea or value to have access to all possible skills with it as well as having an innate control over it. It power is dependent on the influence you have on it as well as souls dedicated to your cause) ( Basically you can either kill anyone that dares to control the same thing as you or gather dedicated follower willing to do sacrifices in your name"
			},

			cathonian:{
				
				field:"Racial",
				title:"Cathonian Sacrifice",
				quotes:"Soul is the key to sacrifice and sacrifice is the key to power!",
				description:"Cathonians can sacrifice any living in order to establish a temporal connection with the Primal Chaos itself. While connected you can negotiate, ask for information, ask for powers all for a price...either in souls or deeds. ) (Cathonians also can use all Dark Arts for a lesser price depending on its relation with the Primal Chaos."
			},

			thane:{
				
				field:"Racial",
				title:"SoulTech",
				quotes:"Soul is the most powerful battery",
				description:"You can absorb souls to create new RuneTech of your own, by mixing your blood with powerful and pure substances like, Gold, Oricalcum, Obsidian, ect"
			},

			lost:{
				field:"Racial",
				title:"Syncrony",
				quotes:"Two souls one will.",
				description:"This weirdos has two souls in one body, one is the dominant soul that takes all decisions, experiences and feels the word , the other is the slave souls that does all the thinking and memorizing. They are fully synchronized."

			},

			dragon:{
				field:"Racial",
				title:"Dragon Form!",
				quotes:"When the soul reveals its true Shape!",
				description:"Usually you are in your humanoid reptilian form but you can transform into your giant mighty Dragon form at will possess sharp claws, thick scales and powerful wings, as well as breath attack corresponding your element."

			},

			vampire:{
				field:"Racial",
				title:"Vampirism",
				quotes:"My soul is the nigth, I’m the apex predator!",
				description:"Vampires are by nature: 1) Regenerate fast, 2) Possess great senses, especially smell and can 3) React to things a moment before they happen )( You can also make other vampires by giving a share of your power, they will be under your control as long as you are much stronger than them, if the transformation dont goes well they become ghouls, zombie like creatures."

			},

			ethernal:{
				field:"Racial",
				title:"Ethereal",
				quotes:"No sword can harm my soul.",
				description:"Although you have a physical body that you can materialize at will, it just a puppet. Ethereals function purely on their spiritual body and thus they are immune to all physical damage, weapons or elements alike. They can also dematerialize, becaming virtualy invisible for those you cannot sense the Etheral) ( You can also have bonus in any interaction with the spiritual planes"
			},

			trengar:{
				field:"Racial",
				title:"Inner Beast",
				quotes:"Feral Soul",
				description:"Choose an Ancestral animal/beast it can be real, from mythology or created by you. You get abilities related to it as well as a Transformation that makes you look like it and Empowers all previous abilities as well as your physical and spiritual capacities."
			},

			primordial:{
				field:"Racial",
				title:"Universal Precursor",
				quotes:"My soul is conected to all",
				description:"Primordials were created at the same time as the universe, thus they have a lot in common with the nature. Your Element of choice is upgraded to an Overlord since the beginning and you can control it where it might be.) ( You also have a connection with nature that gives you power based on how prominent you element is on that particular environment as well as how long you have been in that particular environment."
			},
		},
		
		














		unique:{
			
			shadowF:{
				
				field:"Unique",
				title:"Shadow Form",
				quotes:"Shadows are more than reflection",
				description:"Shadow demons can enter the shadow world to travel faster through objects and remain hidden,",
				
			},

			deathDance:{
				
				field:"Unique",
				title:"Death Dance",
				quotes:"Dance is my partner and wind my stage.",
				description:"Venias Demons have a special connection with the deathwind Element. You can fuse with it absorbing dark matter directly from the souls of those you are consuming, while moving fast and free like the wind. You can then materialize in any part of your deathWind.) ",
				
			},

			animalTrasnformation:{
				
				field:"Unique",
				title:"Animal transformation",
				quotes:"I can fly like a thunderbird, run like a unicorn!",
				description:"You can transform in all known animals/creatures and gain their abilities while in their form. If you want a new animal form to be ‘known’  you need to drink its blood, then is always available.",
				
			},

			redLigthning:{
				
				field:"Unique",
				title:"Red Ligthning",
				quotes:"“Fast and Slow, our Legacy. ",
				description:"Perkunas have a innate legacy ability that temporarly accelerates them while slowing everyone around, leaving a red trail. This skill is very tiring.",
				
			},

			scrapBungler:{
				
				field:"Unique",
				title:"Scrap bungler",
				quotes:"Duct tape for all!",
				description:"You can make runeTech with any material, they might break sooner but making weapons , explosives, barriers or whatever you can think off is almost free for you",
				
			},

			pureAdaptability:{

				field:"Unique",
				title:"Pure Adaptability",
				quotes:"No matter the conditions I will adapt",
				description:" Your learn skills faster and have access to skills limited for other Kindred, additionally you start with an extra attribute  )( Choose 1 Might *, 1 Cunning* or 1 Darkness* ",
			},

			behemot:{
				
				field:"Unique",
				title:"Behemot",
				quotes:"Sizes matter... for war",
				description:" As a PitLord not only you You have a large and very powerful physical body made for war. Spikes, thick skin, two hearts ect) ( You also have a special pit for your souls that produces dark matter periodically without consuming the soul. kind of like an interest, giving you a passive way of empowering yourself",
			},

			deathCurse:{
				
				field:"Unique",
				title:"Death's Curse",
				quotes:"I kill you one way or another.",
				description:" Darkind are born with the curse of death a mighty Supreme Overlord from beyond the Abyss. It has to effects. First Whoever kills you must embrace death and give up his life, if he cannot do that, you will resurrect. Second you cannot collect the souls of those you kill instead they go directly to the Primal Chaos without the required sacrifice but Suprme Overlord Death gets a part of the reward) ( Souls you got by others means are unaffected and can be used with normality",
			},

			titanHeritage:{
				
				field:"Unique",
				title:"Titan Heritage",
				quotes:"The Most powerful Kindred",
				description:"you can temporamporaly act in their titan form which greatly increases all raw power both physical and spiritual)(You can also absorb the souls of your enemies to gain power but only a small fraction of what a Titan could...",
			},

			titanThane:{
				field:"Unique",
				title:"Ancient Thane",
				quotes:"I will do as grandpa taught me",
				description:"Apart from being a very strong giant, Your runes are the most powerful and durable of all cathonia. You are also an excellent smith and warrior. With the appropriate materials and soul you can make Legendary equipment",
			},

			eternalFrost:{
				field:"Unique",
				title:"Eternal Ice",
				quotes:"I can freeze spirt",
				description:"You have access to the cold powers of the very core of helved which can even freeze hellfire if powefull enougth. This Element is unique an only you, other dragons and handfull of FrostGiants can use it.) ( EternaIce also gives you a ridiculus amount of mana allowing you to be a very powerfull magician",
			},

			unholyDetermination:{
				field:"Unique",
				title:"Unholy Determination",
				quotes:"I grow wings of my desire to fly",
				description:"Apart from its normal use you can consume DarkAnima to permanently evolve your body and spirit according to your goals and desires) ( It takes a lot of DarkAnima to fully evolve especially for higher evolutions",
			},

			messiah:{
				field:"Unique",
				title:"Cathonian Messiah",
				quotes:"Darkness Made Flesh",
				description:"You partially represent the Primal Chaos and thus you dont require to make sacrifices in order to contact with it. Still you need to pay the price for whatever you might ask) ( People that have a significant lower favour than you with the Primal Chaos cannot harm you, unless they are powerful enough to break their protection... ) ( Everyone stars with more or less the same favour so you wont be inmune to other student at the begining",
			},

			massSacrifice:{

				field:"Unique",
				title:"Mass Sacrifice",
				quotes:"It was colective suicide...",
				description:"You 'art' of sacrifices, using sings, time , forgotten prayers and unbelievable gore are so macabre that Mass sacrifices in your name don't add arithmetically instead you get a bonus power that increases exponentially the bigger it is. Greatly increasing your chances to improve your Aura’s influence ) ( As always quality of the sacrifice is very important",
			},

			deathLord:{

				field:"Unique",
				title:"Lord of Death",
				quotes:"I conquered death now she is my *****",
				description:"Not only your necromancy of an Overlord level but you dont require to pay any price, just need souls , bodies and imagination to make champion level undead.",
			},

			secretBlood:{

				field:"Unique",
				title:"Secrets of Blood",
				quotes:"Roses are red and violets are also red to me!",
				description:"Crimson vampires are the masters of blood. Your blood can be controlled by you like any part of your body and it carries your consciousness.) ( Meaning you can use your powers and even regenerate from your blood, As well as understanding others by theirs",
			},

			lie:{

				field:"Unique",
				title:"Lie of the deceiver",
				quotes:"I always speak the truth",
				description:"At the cost of some Dark Anima, Balseraph lies has the power to become reality for the person who you told them, weak minded will believe anything you say and even the stronger mind will have doubts if your poison words enter their mind, but be careful what to lie, if you are caught people will discover that you are Balseraph Demons and will be aware of your power",
			},

			asura:{

				field:"Unique",
				title:"Mystical Siddhis",
				quotes:"I dominate the eighth Perfections.",
				description:"Your mystical arts allow you to change the shape and properties of your body, to become larger, smaller, invisible as well as to be able to unlock further potential) ( The Siddhis are unique in the sense that they are spiritual but use mana instead of energy",
			},

			cybor:{

				field:"Unique",
				title:"Runic Cyborg",
				quotes:"I surpassed the weakness of flesh",
				description:"Long time that the Bes/eset change their bodies with runetech, much more powerful, durable and versatile. Best part you can mod yourself! In order to improve at any particular action.) ( All or senses body and spirit are enhanced, you also have an artificial intelligence. Obviously if you get hurt you must repair yourself since RuneTech is awesome! But is not organic...",
			},

			livingMatter:{

				field:"Unique",
				title:"Living Matter",
				quotes:"Objects do as I command",
				description:"You can imbue part of your life force to inanimate objects, to make them temporarily living in order to achieve the purpose given to them. They won't rest until either the purpose is completed or the energy on them depleted, You can also directly control objects like puppets consumen energy only  while they are on use.",
			},

			darkPact:{

				field:"Unique",
				title:"Dark Essence",
				quotes:"Im Darkness!!",
				description:"Raksasa evolved by absorbing Primal Chaos, thus they use any Dark Art just with stamina.) (This has no negative impact with the Primal Chaos ",
			},

			shapeShifting:{

				field:"Unique",
				title:"Demonic Shapeshifter",
				quotes:"I will be whatever you want me to be",
				description:" You can use Dark anima to transform your body and spirit according to the taste and instincts of your victim, making you extremely appealing or frightening or forgatable at will. You can also copy other appearances ) ( Apart from the normal extraction, You can get Dark Anima from another soul by seduccing it. Potentially giving you access to Powerful soul you couldn't not extract otherwise. ",
			},

			angel:{

				field:"Unique",
				title:"Angelic Body",
				quotes:"Like an Angel!",
				description:"You are extremely beautiful, ever fresh. Your wings are virtually indestructible and can allow you to fly between planes instantly) ( Halo, both Your Divine and Dark arts are stronger ",
			},

			fury:{

				field:"Unique",
				title:"Mischievous Emphaty",
				quotes:"Your desires will help my play",
				description:"You can sense the feelings ,true intentions and desires of others. You can then intensive such emotions or if you play your cards right and are able to connect an emotion to their root or means or fulfilment, you can dictate their actions.)  ( Basically you can control others as long as your control is in line with their emotions and goals. So if somebody is lusty, you can force him to be your lover, if the Lord wants to expand his territory you can tell him to attack a certain place etc. Your control is lost once you deviate from this or if his goals were against you from the beginning.",
			},

			ashen:{

				field:"Unique",
				title:"The Corruption",
				quotes:"World to ashes!",
				description:"Ashen are able to absorb nature, draining its life in order to gain power or regenerate. Thus fighting in wild environments is very advantageous.) ( Use with caution, since it might give you a powerful burst of power or a second wind, but killing nature will disable your Primordial ability in that particular area. ",
			},

			relic:{

				field:"Unique",
				title:"Family Relic",
				quotes:"Very nice art, but it burns when I touch it...",
				description:"You Inherited a relic from your long lost ancestors, since it was forged with divine magic is very powerful and impossible to replicate. The details of the relic depends on your choice of Aura. ) ( Use with caution you are also a creature of Darkness",
			},

			imperial:{

				field:"Unique",
				title:"Royal Mark",
				quotes:"I'm a descendant of Beelzebub",
				description:" You are a superior demon, You have a superior demon form with elegant features, powerful wings, sharp claws and majestic horns.) ( Basically you are superior in everything, stronger, faster, smarter and most importantly your use of Dark Anime is most efficient amongst demons giving you incredible power ups ",
			},

			beast:{

				field:"Unique",
				title:"God Beast",
				quotes:" Lets go fluffy! my cute nine headed hydra.",
				description:"You have a GodBeast companion and a special connection with it. You can choose its species but it will be large enough to ride.) (Your beast God has the aura of control ability same as any other darkGod having acess to all posible skills with it as well as having an special control over it. You can choose its tribe, element or idea as well.",
			},

			devil:{

				field:"Unique",
				title:"Evil incarnate",
				quotes:"Ha ha ha (evil laugth)",
				description:"Your goal to make someone betray whatever principples they have, be family, a Dark master, a dream or even themselves. Everytime you manage that you will get a free gift from the Primal Chaos. Thus giving you the oportunity to corrup more and so on...) ( The quality of the gift depends on the quality of the corrupted soul and the intensity of the betrayal. The primal chaos is only interested in souls of your quality or above.",
			},

			gargoyle:{

				field:"Unique",
				title:"Obsidian Gargoyle",
				quotes:"Rock Solid",
				description:"Normally you look like a grey thane with horns and wings, kind of like a ripoff Imperial Demon, you skin is obviously very durable and has interesting properties but your most amazing abilities are that you can add runes directly to your body and finally you can petrify yourself entering a coma state becoming almost unbreakable and regeneration from any damage. Only problem you will lose consciousness and wake up after a while.",
			},

			shadow:{

				field:"Unique",
				title:"Shadow Form",
				quotes:"Shadows are more than reflection",
				description:"Basicly you become etheral in a cool way, Ehteral: Ethereals function purely on their spiritual body and thus they are immune to all physical damage, weapons or elements alike. They can also dematerialize, becaming virtualy invisible for those you cannot sense the Etheral) ( You can also have bonus in any interaction with the spiritual planes.",
			},

			flame:{

				field:"Unique",
				title:"Flame Master",
				quotes:"Burn!!!",
				description:"Your dominion of hellfire is upgraded to soulfire that can affect spirit and magic, as a fact there is nothing your fire cannot burn is just a question of quantity. Also your fire does not exhaust if there is still something to burn so it will keep burning for all eternity if necessary until is quenched by some exterior mean or it burns everything around it.",
			},

			infernal:{

				field:"Unique",
				title:"Dark Forger",
				quotes:"Condensed Darkness",
				description:"You can Imbue Dark effects into your runes, thus creating cursed weapons, items for worship of Dark masters. And Amulets that can protect you from such things.) ( Basically you can make runes using the effect of any dark skills that you have.",
			},

			reaper:{

				field:"Unique",
				title:"The Harvest",
				quotes:"Your time has come",
				description:"The Scythe of the Reaper has been imbued with death magic, and other powerful effects from the abyss. When fighting opponents that have been marked by the Abyss The Scythe activates its hidden powers thus it can cut through anything melting most defenses like butter. Plus any cut from the Scythe drains the life force weakening the opponent and regenerating the Reaper. You unlock even more powers by collecting souls) ( Against unmarked opponents it's just a very good weapon.",
			},

			soulFlayer:{

				field:"Unique",
				title:"True Pain",
				quotes:"You have not experience pain until now",
				description:"Any damage dealt by a soul flayer causes a pain that is ten times stronger than normal, is a pain beyond what the normal brain can handle, so depending on the intensity and your resistance, you could lower your guard, go into hysteria or even collapse.) ( Souls that have been tortured to its limits  either on life or death by a soul flayer are more tasty in a Cathonia sacrifice.",
			},

			voidD:{

				field:"Unique",
				title:"Void Armor",
				quotes:"There is no better defense than absorption",
				description:"You partially absorb any magic or mental attack reducing its effect and gaining mana in the process. (The percentage depends on the power of the enemy spell in relation to the valuables in your possession, the more things you have the more you will resist.)",
			}
		},
		
		













		premade:{

			darkMaster:{
				
				att:"(Darkness)",
				field:"Starting Skill",
				title:"Dark Master (Infinity)",
				quotes:"There is only one truth with many faces.",
				description:"Infinity cultist know the symbols the names and the conditions to interact with Infinty and its numerous faces. Infinity Worship varies depeding on the face but all faces have low risk mening they mainly demand lifesyle choices , strong vows and deepth faith, if you are able to follow them you get the reward asosiated with its face. ",
				
			},


			deathWind:{
				
				att:"(Migth)",
				field:"Starting Skill",
				title:"Elemental Dominium (DeathWind)",
				quotes:"It carries death and also me.",
				description:"  Venias Demons start with the Deathwind Element which consumes all nearby life slowly )( Element control uses energy like physical activities ",	
			},

			hellFire:{
				
				att:"(Migth)",
				field:"Starting Skill",
				title:"Elemental Dominium (HellFire)",
				quotes:"It burns forever!",
				description:"FlameLords start with the Hellfire Element which burns with much more intensity than normal fire)( Element control uses energy like physical activities ",
				
			},

			alquemy:{

				att:"(Cunning)",
				field:"Starting Skill",
				title:"Craft/Job Mastery (Alquemy)",
				quotes:"Leg of frog, and hair of dog",
				description:" Piligrims start with Alquemy. You know how to combine the natural element to create potions and concoctions. You can achive almost any effect but require the appropiate recepy and ingredients.",
			},

			inventor:{

				att:"(Cunning)",
				field:"Starting Skill",
				title:"Craft/Job Mastery (Thinker)",
				quotes:"Opss is a bit loose...",
				description:" Bes/eset start with Thinker. You know how to design build and repair all sorts of machines. You can build almost anything as long is not too advanced but you need the right materials for good results.",
			},

			student:{

				att:"(Cunning)",
				field:"Starting Skill",
				title:"Craft/Job Mastery (Student)",
				quotes:"I know how to learn",
				description:" Menbers of the Research Division start with Student. You know basic techniques such as summary and schemes and fast reading that help you study. You also know how to do research, compare information, take reference, do analisis of data and write very good essays.",
			},

			spy:{

				att:"(Cunning)",
				field:"Starting Skill",
				title:"Craft/Job Mastery (Espionage)",
				quotes:"Im a secre agent but thats a secret.",
				description:" Special Ops start with espiongage. You know how to take another identity. How to observe without being detected, how to fool securtity of any kind, how to comunicade via codes and that kind of stuff.",
			},

			torture:{

				att:"(Cunning)",
				field:"Starting Skill",
				title:"Craft/Job Mastery (Torture)",
				quotes:"I know what makes them tick.",
				description:" Soul Flayers start with torture. You know how to make other suffer. How the anatomy for each kindred and their spirits and even the death works, how is psycology of pain, anxity and suffering. How to make them sing fast or slowly make them into despair",
			},

			trapper:{
				
				att:"(Cunning)",
				field:"Starting Skill",
				title:"Craft/Job Mastery (Trapping)",
				quotes:"Come on! go towards the cheese...",
				description:" Kaukas start with Trapping. You understand all forms of trap as well as making perfect hiding places",
				
			},

			spearShield:{
				
				att:"(Migth)",
				field:"Starting Skill",
				title:"Weapon/Combat Mastery (SpearShield)",
				quotes:"Like waves crusing into the coast",
				description:" Mercenaries start with Spear and Shield. You understand all the techniques as well as the practice they are an extension of your body. You can use similar weapons with great mastery",
			},

			scythe:{
				
				att:"(Migth)",
				field:"Starting Skill",
				title:"Weapon/Combat Mastery (Scythe)",
				quotes:"Like harvesting wheat",
				description:" Reapers start with mastery of the Scythe You understand all the techniques as well as the practice they are an extension of your body. You can use similar weapons with great mastery",
			},

			figther:{
				
				att:"(Migth)",
				field:"Starting Skill",
				title:"Weapon/Combat Mastery (Brawler)",
				quotes:"Meet my fists: Des and Troy",
				description:" Gargoyles Start with Brawler You understand the hand to hand combat, your style is like MMA striking like a boxer and grappling like a wrestler.",
			},

			hunter:{
				
				att:"(Cunning)",
				field:"Starting Skill",
				title:"Craft/Job Mastery (Hunter)",
				quotes:"You are my prey",
				description:"Blood Cultist start with Hunter. You know how to track, how to hide and the weak stops of most Kindred",
			},

			merchant:{
				
				att:"(Cunning)",
				field:"Starting Skill",
				title:"Craft/Job Mastery (Merchant)",
				quotes:"Best Price! Best Price!",
				description:"Slavers start with Merchant. You know how the safest routes, the good places and the correct princes to buy and sell things.",
			},

			farmer:{
				
				att:"(Cunning)",
				field:"Starting Skill",
				title:"Craft/Job Mastery (Farmer)",
				quotes:"All heroes start as farmers rigth?",
				description:"Retiered start with Farmer . You know how to plant and attend all kinds of crops. You also have lots of patience and apriciet hardwork and the small things in life...",
			},

			pet:{
				
				att:"(Cunning)",
				field:"Starting Skill",
				title:"Craft/Job Mastery (Tamer)",
				quotes:" Is all about punishment and reward",
				description:"Demon Riders start with Tamer . You know how to take care of beast. comunicate with them, their needs medicine and food. You know the weakpoints of all kinds of creature and You can also ride any animal to battle like a pro.",
			},

			rose:{
				
				att:"(Cunning)",
				field:"Starting Skill",
				title:"????",
				quotes:"?",
				description:">><<<>>>>",
			},

			astral:{
				
				att:"(Darkness)",
				field:"Starting Skill",
				title:"Cursed Weapon (Astral)",
				quotes:"Empowered by the Harbringers of Doom!",
				description:"Members of the Astral orders start with a cursed weapon related to its constelation) (It will drain your energy and on long uses yout life... but you could always use souls..)",
			},
		

			superSpeed:{
				
				att:"(Migth)",
				field:"Starting Skill",
				title:"Super Speed",
				quotes:"Faster than you can say… finish",
				description:"You have trained your body and spirit move faster or were born this way. The point is that you are really fast. In both movement and action.",
				
			},

			combatTraining:{

				att:"(Migth)",
				field:"Starting Skill",
				title:"Weapon/Combat Mastery",
				quotes:"Is not how big, is how you use it",
				description:"Choose a weapon or a hand to hand combat style. It can be a common or created by you. The point is that you are a master in that art. ) ( Can be picked up to three times for diferent masteries",
				
			},

			superStrength:{
				
				att:"(Migth)",
				field:"Starting Skill",
				title:"Super Strength",
				quotes:"Flex those muscles",
				description:"You have trained your body and spirit to destroy everything in your path or were born this way. The point is that you are really strong. For both figting or utilty.",
				
			},

			superResistence:{
				
				att:"(Migth)",
				field:"Starting Skill",
				title:"Super Resistence",
				quotes:"My skin is my armor",
				description:"You have trained your body to resit all kinds of punishments most probably you were born this way. The point is that you are really tough and can resist all basic forms of damage as well as physical status effects such cold, burm, wounds ect.",
				
			},

			regenerationFactor:{

				att:"(Migth)",
				field:"Starting Skill",
				title:"Regeneration Factor",
				quotes:"You will have to do better than that",
				description:"For whatever reason, curse, gift, magic, mutacion or otherwise Your body regenerates itslef at a fast rate, making you unstopable in situations of attricion.) (Care you can still be killed, death people dont regenerate...",
				
			},

				cosmicFligth:{
				
				att:"(Migth)",
				field:"Starting Skill",
				title:"Cosmic Fligth",
				quotes:"Because cool guys must fly",
				description:"Most Overlords and Dark Princes can travel through space between planets and moons, but to go another system they must use portals, gates, spaships, black holes or whatever. You dont need any of those and can go fligthing anywhere in Cathonia. (If they dont kill you) (Also your regular fligth is fast and powerfull and can be used in combat)",
			},
			
			
			berseck:{
				
				att:"(Migth)",
				field:"Starting Skill",
				title:"Berseker",
				quotes:"YEAH!!!",
				description:"You absolutly nuts in a battlefield, specially if you have adreline rush due to quemicals or near death experiences then you figth with above 100% eficiency, is almost imposible for you to get tired, you fear nothing and dont get distracted.) (Problem is after the figth when the adreline is lost you will have a really bad 'hangover'",
				
			},

			
			spirtualEnergy:{
				att:"(Migth)",
				field:"Starting Skill",
				title:"Spiritual Power",
				quotes:"the power is inside",
				description:"Your use of the spirit, call it chakra, ki, chi or otherwise, is deathly you can use both offensive empowering physical attacks or using shockwaves and defensive enduring your body or making an energy barrier) ( It can hurt Ethereals, It uses stamina",
			},

			spirtualFull:{

				att:"(Migth)",
				field:"Starting Skill",
				title:"Spiritual Energy",
				quotes:"Endless potencial",
				description:"You have an enormous reseve of energy greatly increasing the number of times you can use any physical activity, any other use of spirt , call it chakra, ki, chi prana or otherwise, or any use of elements or innate skills. Basicly is very hard for you to get tired and you outlast most others doing the same thing, meaning you could also do it with more intensity ",
			},

			unflinching:{

				att:"(Migth)",
				field:"Starting Skill",
				title:"Spirit Resolve",
				quotes:"Nothing will stop me!",
				description: "You can use energy, ki, chi, or whatever to Resist most mental and subtle status effects such as “Mind Control” , “Charm” , “Fear” etc.",
			},

			control:{

				att:"(Migth)",
				field:"Starting Skill",
				title:"Spirit Control",
				quotes:"You will do as I will!",
				description: "You can use energy, ki, chi or whatever to extend the control of your mind to people or matter. Although it has both telephaty and telekinesis effects combined is much more crude and uses your phsyical and spirtual energy instead of mana.",
			},

			element:{
				
				att:"(Migth)",
				field:"Starting Skill",
				title:"Elemental Dominium",
				quotes:"Elements hear my call!",
				description:"Choose an element either basic, complex or created by you. It will be part of your body and you can use it. The more powerful the element the more difficult to use )( Element control uses energy like physical and spirtual activities",
			},

				carisma:{

				att:"(Cunning)",
				field:"Starting Skill",
				title:"Charisma",
				quotes:"Tongue is the sharpest blade",
				description:"You know how to speak to people, handle your self in public events, react to peoples likes and dislikes as well as having a presence and a really good vocabulary.",
			},

			trick:{
				
				att:"(Cunning)",
				field:"Starting Skill",
				title:"Trickster",
				quotes:" I will make this pencil disappear.",
				description:"You have access to deception both in word and action think of a professional modern magician and a future teller mentalist charlatan at the same time. ",
				
			},

			genius:{

				att:"(Cunning)",
				field:"Starting Skill",
				title:"Genius",
				quotes:"Over150 IQ!",
				description:"You are very smart able to grasp any theory, high tactical thinking, logical sense and vast memory.",
			},

			dex:{

				att:"(Cunning)",
				field:"Starting Skill",
				title:"Dextrous",
				quotes:"Some People are born with talent others don't...",
				description:"You are able to master, any fisical or spirtual skill with great facility. Thus learning faster and being able to reach higher than anyother.",
			},

			rich:{

				att:"(Cunning)",
				field:"Starting Skill",
				title:"Rich",
				quotes:"I got the money!",
				description:"You or your Ovelord have a large amount of souls and the infracesture to earn more. The point is that you got moneys",
			},

			craftMastery:{
				
				att:"(Cunning)",
				field:"Starting Skill",
				title:"Craft/Job Mastery",
				quotes:" I'm a great baker!",
				description:"Choose your craft, basically a profession that you want to be really good at) Good Examples ( Hunter , Doctor , Engineer , Businessman , Lawyer ,  Tactician) (Can be picked up to three times for different professions)",
			},

			leadership:{

				att:"(Cunning)",
				field:"Starting Skill",
				title:"Leadership",
				quotes:"Im a leader not a boss. But im totaly the boss.",
				description:"You now to encourage a team, have administrative abilities and know how efficiently balance pros and cons while making yourself respected.",
			},
			
			servant:{

				att:"(Cunning)",
				field:"Starting Skill",
				title:"Loyal Servant",
				quotes:"Alfred!!!",
				description:"You have something rare in Cathonia a trusted vasal, he is not much but will do everything in his abilities to serve you and your goals.",
			},
			
			contact:{

				att:"(Cunning)",
				field:"Starting Skill",
				title:"Contacts",
				quotes:"Is not what you know is who you know",
				description:"You know people, and also people that knows other people and you know places that those person go to do things and there you meet even more...",
			},


				trasmute:{

				att:"(Cunning)",
				field:"Starting Skill",
				title:"Arcane Trasnmute",
				quotes:"Mana shapes matter",
				description:"You can use mana to change the properties of matter , make it heaviers more resistant, grow in sizes, depending how much chance it needs to undergo achieve your desired goal the more mana or mental energy it consumes.",
			},

			create:{

				att:"(Cunning)",
				field:"Starting Skill",
				title:"Arcane Creation",
				quotes:"Mana is the begining",
				description:"You can use mana to materialize anything, depending on the sizes, rarity of materials and other unknown factors it takes more mana to do.) ( You can summon processed items , just remenber the mose complex the more mana.",
			},

			antimage:{

				att:"(Cunning)",
				field:"Starting Skill",
				title:"Arcane Dispel",
				quotes:"Back to mana",
				description:"You can use mana to cancel or reduce the effect of any magic or mind power, it works partially with spirit and darkness but is not cost-efficient. depending on the power of the spell the more mana you have to invest. ",
			},

			telepaty:{

				att:"(Cunning)",
				field:"Starting Skill",
				title:"Telepaty",
				quotes:"Mind on Mind",
				description:"You can use your mind to interact with the minds of others , read them speak with them , cause several pain masters can even add or erase memories, depending the difficulty the more mental energy or manae it consumes.",
			},

			telekinesis:{

				att:"(Cunning)",
				field:"Starting Skill",
				title:" Telekinesis",
				quotes:"Mind on matter",
				description:"You can use your mind to interact with the world , move things, steal things, buind and destroy things. The mind is on most cases more powerfull than the body so you can handle much more with telekinesis that you could otherwise, depending the difficulty the more manae or mental energy it consumes. ",
			},

			teleport:{

				att:"(Cunning)",
				field:"Starting Skill",
				title:" Teleport",
				quotes:"Mind on movement",
				description:"You can use your mind to appear in other place. Depending the distance and the frecuency of the use the more mana or mental energy it consumes. ",
			},

			meditacion:{

				att:"(Cunning)",
				field:"Starting Skill",
				title:"Meditacion",
				quotes:"Mind brings Mana",
				description:"You can recover large amounts of mind power or manae by meditating, also your mana control is superior so all Arkane/Mental skills cost less manae. ",
			},

			hypnosis:{

				att:"(Cunning)",
				field:"Starting Skill",
				title:"Hypnosis",
				quotes:"Mind rules subconsciousness",
				description:"Your mind affects the subconscious, you communicate and read astral ideas , enter in dreams, bring people to states of trance and sleep, and all kinds of secondary mind interactions)( You use manae or mental energy, this affects the left hemisphere while Telepathy focused more on the logica, language and thoughts",
			},


			awareness:{

				att:"(Cunning)",
				field:"Starting Skill",
				title:"Instincts",
				quotes:"The most primal part of the brain",
				description:"Your senses are more advanced very sensible and trained, you are aware of your surroundings and the information of your senses, even before your logic can apply. How you use this will depend on your skils",
			},


			familiar:{
				
				example:"Examples: A black cat like Sabrina!/ An Sloth / A purple fairy?", 
				att:"(Darkness)",
				field:"Starting Skill",
				title:"Dark Familiar",
				quotes:"Isnt he/she cute :)",
				description:"You have a familar, a creature of the Abyss linked to you, choose any small animal/best form that you will like to be his physical form. Familiars are very helpfull and grow powerfull with you, but they must feed on souls or they will die... ",
			},

			cursedWeapon:{

				att:"(Darkness)",
				field:"Starting Skill",
				title:"Cursed Weapon",
				quotes:"Absolute power for a little price...",
				description:"Choose any weapon or equipment or item. You will have a powerfull cursed version of it) (It will drain your energy and on long uses yout life... but you could always use souls...",
			},
			
			master:{
				
				att:"(Darkness)",
				field:"Starting Skill",
				title:"Dark Master of the Abyss",
				quotes:"Oh Dark one! I invoke you!",
				description:"You can choose a Supreme Lord of the Abyss in order to have a connection with it know the symbols the names and the conditions to interact with him/her/it. Different Supreme Overlords have different personalities, powers and demand different things.) ( You can choose up to three Dark Masters but is not recommended unless you know what you are doing. Dark Masters provide much better deals to Cathonians since they can contact directly with the Primal Chaos",
				
			},

			smite:{

				att:"(Darkness)",
				field:"Starting Skill",
				title:"Divine Arts Smite",
				quotes:"Fear brigthness of the LIGTH!!!",
				description:" Somehow you can use the power of the light to burn all evil, the more darkness the enemy the more damage. the damage scales of you so even with max darkness an Overlord could resist your smite. Divine abilities has a bigger price than dark arts, since the Primal Chaos doesnt enjoy the show, so get ready to pay in servitude, souls or blood) ( Many overlords will hate you, but not all, afterall if it make you stronger use it ",
			},

			bless:{

				att:"(Darkness)",
				field:"Starting Skill",
				title:"Divine Arts Blessing",
				quotes:"Admire the power of the ligth",
				description:" Somehow you can use the power of the light to bless, you can give all kinds of blessings not only to you but others, Is much more flexible than Dark Empower and can counter most curses and negative effects. Divine abilities have bigger price than dark arts, since the Primal Chaos doesnt enjoy the show, so get ready to pay in servitude, souls or blood) ( Many overlords will hate you, but not all, afterall if it make you stronger use it ",
			},

			bolt:{

				att:"(Darkness)",
				field:"Starting Skill",
				title:"Dark Bolt",
				quotes:"Die!",
				description:" You can use the raw power of darkness to shoot a powerfull deathly proyectile with speaicl effects. as always there is always a price, depending on the power and added effects like hooming, it could drain your life force exhausting you, take away something from you or even kill you. But you can always pay with souls…  ",
			},

			barrier:{

				att:"(Darkness)",
				field:"Starting Skill",
				title:"Dark Barrier",
				quotes:"Fail!",
				description:" You can use the raw power of darkness to form a powerfull barrier with speaicl effects. as always there is always a price, depending on the power and added effects like hooming, it could drain your life force exhausting you, take away something from you or even kill you. But you can always pay with souls…  ",
			},


				subdue:{
				
				att:"(Darkness)",
				field:"Starting Skill",
				title:"Dark Arts Subjugation",
				quotes:"Fear the control of Darkness!",
				description:"You know the symbols the names and the conditions to corrupt the mind of others, you will first try to break their defenses then you can try to steal thoughts, influence their actions cause damage, madness, and finally control them like puppets. There is always a price, depending on the power and complexity of your action it can tire you, take away something from you or even kill you. But you can always pay with souls…",
				
			},

			curses:{
				
				att:"(Darkness)",
				field:"Starting Skill",
				title:"Dark Arts Curses",
				quotes:"Fear the touch of Darkness!",
				description:" You know the symbols the names and the conditions to create powerful curses, both lethal and none lethal with all kinnds of effects times and triggers. There is always a price, depending on the power of the curse can tire you, take away something from you or even kill you. But you can always pay with souls…",
				
			},

			clairvoyance:{
				
				att:"(Darkness)",
				field:"Starting Skill",
				title:"Dark Arts Clairvoyance",
				quotes:"Fear the vision of Darkness!",
				description:"You know the symbols the names and the conditions to see the future and even influence it. There is always a price, depending on the vision and the influence it could tire you, take away something from you or even kill you. But you can always pay with souls…",
				
			},


			necromancy:{
				
				att:"(Darkness)",
				field:"Starting Skill",
				title:"Dark Arts Necromancy",
				quotes:"Fear the army of Darkness!",
				description:"You know the symbols the names and the conditions to see the 'resurrect' more like raise undead bodies, trap spirits and harm the living. There is always a price, depending on the vision and the influence it could tire you, take away something from you or even kill you. But you can always pay with souls…",
				
			},
			
			empower:{


				att:"(Darkness)",
				field:"Starting Skill",
				title:"Dark Arts Empower",
				quotes:"Fear the power of Darkness!",
				description:"You know the symbols the names and the conditions to imbue your body and spirit with Darkness, increasing all your combat abilities and gaining a sizeable powerup as well as unique abilities. There is always a price, depending on how much power, the duration, and extra effects like regenarion it could tire you afterwards, take away something from you or even kill you. But you can always pay with souls…",
			},

			shaman:{

				att:"(Darkness)",
				field:"Starting Skill",
				title:"Dark Arts Shamanism",
				quotes:"Fear the nature of Darkness!",
				description:"You know the symbols the names and the conditions in order to connect with the corrupted nature, you can comunicate with it, calm feral beast and flora, change the climate, medle with the elements and even provoke natural disasters . There is always a price, depending on how much power, the duration, and extra the effect it could tire you afterwards, take away something from you or even kill you. But you can always pay with souls…",
			},


			summon:{

				att:"(Darkness)",
				field:"Starting Skill",
				title:"Dark Arts Summoning",
				quotes:"Fear the residents of Darkness!",
				description:" You know the symbols the names and the conditions to summon powerful servants of the Abyss they vary in power and purpose depending on your ritual an offering. There is always a price, depending on the summon it could drain your life force exhausting you, take away something from you or even kill you. But you can always pay with souls… ",
			},

			pervert:{

				att:"(Darkness)",
				field:"Starting Skill",
				title:"Dark Arts Corrupt",
				quotes:"Fear the influence of Darkness!",
				description:" You know the symbols the names and the conditions to use the darkness in order to manipulate others, little by little chaning how they feel about things, this ability is very subtle and goes almost unnoticeable. As always There is always a price, depending on whom and how much you are chaning about him/her, it could drain your life force exhausting you, take away something from you or even kill you. But you can always pay with souls… ",
			},

			demonContract:{

				kin:"demon",
				att:"(Darkness)(Demon)",
				field:"Starting Skill",
				title:"Demon Contract",
				quotes:"Sing right here, forget about the small letter is just bureaucracy",
				description:"You can make deals with others in exchange for anything really although the most popular is the soul, if you hold your end to the bargain the other person is forced by the Rulers of Seven Hells to hold their part. ) (Warning don't expect to fool DarkPrinces or Overlords, against them is more of an insurance that they keep their part but then again anything is possible",
				},





		},


		attributes:{

			migth:{
				
				key:"migth",
				number:1,
				stars:"starsM",
				name:"Migth",
				info:"Migth allows you to unlock starting abilities related to the body both physical and spiritual, martial prowess, and figthing skills",
				arch:"WarLord",

				field:"Attribute",
				title:"Migth (*)",
				quotes:" I will crush you!",
				description:"a flexible attribute point to spend on Migth skills",
				
			},

			
			cunning:{
				
				key:"cunning",
				number:2,
				stars:"starsC",
				name:"Cunning",
				info:"Cunning allows you to unlock starting abilities related to the mind, the social enviroment, subterfuge and complex skills",
				arch:"MasterMind",

				field:"Attribute",
				title:"Cunning (*)",
				quotes:"Everything according to plan.",
				description:"a flexible attribute point to spend on Cunning skills",
				
			},


			darkness:{
				
				key:"darkness",
				number:3,
				stars:"starsD",
				name:"Darkness",
				info:"Darkness allows you to unlock starting abilities related to Cathonia itself, primal evils, dark magic and powerfull double-edged skills",
				arch:"Dark One",

				field:"Attribute",
				title:"Darkness (*)",
				quotes:"True power is beyond my mortal self.",
				description:"a flexible attribute point to spend on Darkness skills",
				
			},
		},

		








		migth1:{

		base:{
			
			base:{
				
				att:"(Migth)",
				field:"Starting Skill",
				title:"Migth:",
				description:"Skill description will appear here, then you can add it or upgrade it, paying it's star (*) Cost.",
				quotes:"Choose a Skill",
				
			},

		},


		one:{

			

			superStrength:{
				
				att:"(Migth)",
				field:"Starting Skill",
				title:"Super Strength",
				quotes:"Flex those muscles",
				description:"You have trained your body and spirit to destroy everything in your path or were born this way. The point is that you are really strong. For both figting or utilty.",	
			},

			superResistence:{
				
				att:"(Migth)",
				field:"Starting Skill",
				title:"Super Resistence",
				quotes:"My skin is my armor",
				description:"You have trained your body to resit all kinds of punishments most probably you were born this way. The point is that you are really tough and can resist all basic forms of damage as well as physical status effects such cold, burm, wounds ect.",	
			},

			superSpeed:{
				
				att:"(Migth)",
				field:"Starting Skill",
				title:"Super Speed",
				quotes:"Faster than you can say… finish",
				description:"You have trained your body and spirit move faster or were born this way. The point is that you are really fast. In both movement and action.",
			},

			superAura:{
				
				att:"(Migth)",
				field:"Starting Skill",
				title:"Super Aura",
				quotes:"I am the Best!",
				description:"You mysteriously dominated the art, but most probably were born with the ability to irradiate and multiply your positive aptitudes. (Meaning if you are strong you will seem stronger, if you are handsome then more handsome, if you are smart and a good leader then better, like this with all) (You need to have the actual skill for the aura to work but I will make you more competent, thus allowing you easier alliances and intimidating being who otherwise could kill you.",
			},


			spirtualEnergy:{
				
				att:"(Migth)",
				field:"Starting Skill",
				title:"Spiritual Power",
				quotes:"the power is inside",
				description:"Your use of the spirit, call it chakra, ki, chi or otherwise, is deathly you can use both offensive empowering physical attacks or using shockwaves and defensive enduring your body or making an energy barrier) ( It can hurt Ethereals, It uses stamina",
			},

			spirtualFull:{

				att:"(Migth)",
				field:"Starting Skill",
				title:"Spiritual Energy",
				quotes:"Endless potencial",
				description:"You have an enormous reseve of energy greatly increasing the number of times you can use any physical activity, any other use of spirt , call it chakra, ki, chi prana or otherwise, or any use of elements or innate skills. Basicly is very hard for you to get tired and you outlast most others doing the same thing, meaning you could also do it with more intensity ",
			},

			unflinching:{

				att:"(Migth)",
				field:"Starting Skill",
				title:"Spirit Resolve",
				quotes:"Nothing will stop me!",
				description: "You can use energy, ki, chi, or whatever to Resist most mental and subtle status effects such as “Mind Control” , “Charm” , “Fear” etc.",
			},

			control:{

				att:"(Migth)",
				field:"Starting Skill",
				title:"Spirit Control",
				quotes:"You will do as I will!",
				description: "You can use energy, ki, chi or whatever to extend the control of your mind to people or matter. Although it has both telephaty and telekinesis effects combined is much more crude and uses your phsyical and spirtual energy instead of mana.",
			},
		},
		
		two:{

			combatTraining:{

				example:"Examples: Sword and shield / Assault rifle / ( I want a martial art like konfu but based on the animals of Cathonia)",
				att:"(Migth)",
				field:"Starting Skill",
				title:"Weapon/Combat Mastery",
				quotes:"Is not how big, is how you use it",
				description:"Choose a weapon or a hand to hand combat style. It can be a common or created by you. The point is that you are a master in that art. ) ( Can be picked up to three times for diferent masteries",
				
			},

			cosmicFligth:{
				
				att:"(Migth)",
				field:"Starting Skill",
				title:"Cosmic Fligth",
				quotes:"Because cool guys must fly",
				description:"Most Overlords and Dark Princes can travel through space between planets and moons, but to go another system they must use portals, gates, spaships, black holes or whatever. You dont need any of those and can go fligthing anywhere in Cathonia. (If they dont kill you) (Also your regular fligth is fast and powerfull and can be used in combat)",
			},
			
			
			berseck:{
				
				att:"(Migth)",
				field:"Starting Skill",
				title:"Berseker",
				quotes:"YEAH!!!",
				description:"You absolutly nuts in a battlefield, specially if you have adreline rush due to quemicals or near death experiences then you figth with above 100% eficiency, is almost imposible for you to get tired, you fear nothing and dont get distracted.) (Problem is after the figth when the adreline is lost you will have a really bad 'hangover'",	
			},

			regenerationFactor:{

				att:"(Migth)",
				field:"Starting Skill",
				title:"Regeneration Factor",
				quotes:"You will have to do better than that",
				description:"For whatever reason, curse, gift, magic, mutacion or otherwise Your body regenerates itslef at a fast rate, making you unstopable in situations of attricion.) (Care you can still be killed, death people dont regenerate...",
			},
			
			element:{
				
				example:"Examples: Fire!!!! / Life? / Black Ligthning yeah",
				att:"(Migth)",
				field:"Starting Skill",
				title:"Elemental Dominium",
				quotes:"Elements hear my call!",
				description:"Choose an element either basic, complex or created by you. It will be part of your body and you can use it. The more powerful the element the more difficult to use )( Element control uses energy like physical and spirtual activities",
			},

			methamorphosis:{
				
				example:"Examples: My muscle grow like in anime, breaking my clothes! / I become Mr Fantastic super Elastic / Noobs I choose to become invisible.",
				att:"(Migth)",
				field:"Starting Skill",
				title:"Metamorphosis",
				quotes:"The power of change.",
				description:"You can choose one special propety of your body that you would like to change at will, it can be anything.",
			},
		},

		unique:{

			god1:{

				only:"DarkGods/es",
				att:"(Migth)",
				field:"Starting Skill",
				title:"Godly blessing/curse",
				quotes:"I will decide your fate.",
				description: "As a God you can curse and bless others, the effect and power will depend on your Aura",
			},

			god2:{

				only:"DarkGods/es",
				att:"(Migth)",
				field:"Starting Skill",
				title:"Godly omniscience",
				quotes:"Im everywhere!",
				description: "You have a connection with your followers, knowing their thoughts and feelings as well as your Aura, meaning you are always conscious of your surroundings",
			},
					
		},

		legend:{

			legend:{

				example:"Examples: A sword! Swords always awesome!/ A Super Cool Magic Stone / A Golden Megantium Armor!!!", 
				field:"Legendary Skill",
				title:"Legendary Weapon",
				quotes:"Excalibour!",
				description: "Choose your weapon, if you wish so it can be an armor as well or an accessory as well. It will be one of a kind, priceless with unique skills related to the purpose of its vesal, meaning weapons with offensive skills, armor defensive and tools supportive skills.) ( Its power level is between a Dark Prince cursed weapon and a Overlord Cursed weapon but with no downsides",
			},
		},
		pen:{

			weak:{
				field:"penalty",
				title:"Weak Spot",
				quotes:"Aquiles heels or perhaps Kryptonite?",
				description:"You have a very specific fathal weakness, known only to you for now...",
			},
		},

		},


		cunning1:{


		one:{

			carisma:{

				att:"(Cunning)",
				field:"Starting Skill",
				title:"Charisma",
				quotes:"Tongue is the sharpest blade",
				description:"You know how to speak to people, handle your self in public events, react to peoples likes and dislikes as well as having a presence and a really good vocabulary.",
			},

			trick:{
				
				att:"(Cunning)",
				field:"Starting Skill",
				title:"Trickster",
				quotes:" I will make this pencil disappear.",
				description:"You have access to deception both in word and action think of a professional modern magician and a future teller mentalist charlatan at the same time. ",
				
			},

			genius:{

				att:"(Cunning)",
				field:"Starting Skill",
				title:"Genius",
				quotes:"Over150 IQ!",
				description:"You are very smart able to grasp any theory, high tactical thinking, logical sense and vast memory.",
			},

			dex:{

				att:"(Cunning)",
				field:"Starting Skill",
				title:"Dextrous",
				quotes:"Some People are born with talent others don't...",
				description:"You are able to master, any fisical or spirtual skill with great facility. Thus learning faster and being able to reach higher than anyother.",
			},

			rich:{

				att:"(Cunning)",
				field:"Starting Skill",
				title:"Rich",
				quotes:"I got the money!",
				description:"You or your Ovelord have a large amount of souls and the infracesture to earn more. The point is that you got moneys",
			},

			craftMastery:{
				
				example:"Examples: Doctor / Botanist / ( I want the knowledge of politics and high overlords what they like who is their enemy ect)",
				att:"(Cunning)",
				field:"Starting Skill",
				title:"Craft/Job Mastery",
				quotes:" I'm a great baker!",
				description:"Choose your craft, basically a profession that you want to be really good at) Good Examples ( Hunter , Doctor , Engineer , Businessman , Lawyer ,  Tactician)",
			},

			leadership:{

				att:"(Cunning)",
				field:"Starting Skill",
				title:"Leadership",
				quotes:"Im a leader not a boss. But im totaly the boss.",
				description:"You now to encourage a team, have administrative abilities and know how efficiently balance pros and cons while making yourself respected.",
			},
			
			servant:{

				att:"(Cunning)",
				field:"Starting Skill",
				title:"Loyal Servant",
				quotes:"Alfred!!!",
				description:"You have something rare in Cathonia, a trusted vasal, he is not much but will do everything in his abilities to serve you and your goals.",
			},
			
			contact:{

				att:"(Cunning)",
				field:"Starting Skill",
				title:"Contacts",
				quotes:"Is not what you know is who you know",
				description:"You know people, and also people that knows other people and you know places that those person go to do things and there you meet even more...",
			},

			awareness:{

				att:"(Cunning)",
				field:"Starting Skill",
				title:"Instincts",
				quotes:"The most primal part of the brain",
				description:"Your senses are more advanced very sensible and trained, you are aware of your surroundings and the information of your senses, even before your logic can apply. How you use this will depend on your skils",
			},


		},
		two:{

			trasmute:{

				att:"(Cunning)",
				field:"Starting Skill",
				title:"Arcane Trasnmute",
				quotes:"Mana shapes matter",
				description:"You can use mana to change the properties of matter , make it heaviers more resistant, grow in sizes, depending how much chance it needs to undergo achieve your desired goal the more mana or mental energy it consumes.",
			},

			create:{

				att:"(Cunning)",
				field:"Starting Skill",
				title:"Arcane Creation",
				quotes:"Mana is the begining",
				description:"You can use mana to materialize anything, depending on the sizes, rarity of materials and other unknown factors it takes more mana to do.) ( You can summon processed items , just remenber the mose complex the more mana.",
			},

			antimage:{

				att:"(Cunning)",
				field:"Starting Skill",
				title:"Arcane Dispel",
				quotes:"Back to mana",
				description:"You can use mana to cancel or reduce the effect of any magic or mind power, it works partially with spirit and darkness but is not cost-efficient. depending on the power of the spell the more mana you have to invest. ",
			},

			enchantD:{

				att:"(Cunning)",
				field:"Starting Skill",
				title:"Arcane Enchantment",
				quotes:"Mana to element",
				description:"You can use mana to imbue anything with any element or use the element itself directly, depending on the power of the spell and the element of choice the more mana you have to invest",
			},

			telepaty:{

				att:"(Cunning)",
				field:"Starting Skill",
				title:"Telepaty",
				quotes:"Mind on Mind",
				description:"You can use your mind to interact with the minds of others , read them speak with them , cause several pain masters can even add or erase memories, depending the difficulty the more mental energy or manae it consumes.",
			},

			telekinesis:{

				att:"(Cunning)",
				field:"Starting Skill",
				title:" Telekinesis",
				quotes:"Mind on matter",
				description:"You can use your mind to interact with the world , move things, steal things, buind and destroy things. The mind is on most cases more powerfull than the body so you can handle much more with telekinesis that you could otherwise, depending the difficulty the more manae or mental energy it consumes. ",
			},

			teleport:{

				att:"(Cunning)",
				field:"Starting Skill",
				title:" Teleport",
				quotes:"Mind on movement",
				description:"You can use your mind to appear in other place. Depending the distance and the frecuency of the use the more mana or mental energy it consumes. ",
			},

			meditacion:{

				att:"(Cunning)",
				field:"Starting Skill",
				title:"Meditacion",
				quotes:"Mind brings Mana",
				description:"You can recover large amounts of mind power or manae by meditating, also your mana control is superior so all Arkane/Mental skills cost less manae. ",
			},

			hypnosis:{

				att:"(Cunning)",
				field:"Starting Skill",
				title:"Hypnosis",
				quotes:"Mind rules subconsciousness",
				description:"Your mind affects the subconscious, you communicate and read astral ideas , enter in dreams, bring people to states of trance and sleep, and all kinds of secondary mind interactions)( You use manae or mental energy, this affects the left hemisphere while Telepathy focused more on the logica, language and thoughts",
			},
		},

		unique:{
		},

		base:{

			base:{
				
				att:"(cunning)",
				field:"Starting Skill",
				title:"Cunning:",
				description:"Skill description will appear here, then you can add it to your character paying it's star (*) Cost.",
				quotes:"Choose a Dark Prince starting Skill",
				
			},

		},

		legend:{

			legend:{

				field:"Legendary Skill",
				title:"Twins Brother",
				quotes:"He/She is like me but more ugly :D",
				description:"You have a very close fraternal twin ,the kind that looks and acts different, join the university with you, you know him/her very well and he/she has your back) ( Ofc in Cathonia friendships and even family are rare and is possible for him/her to betray you in the future if he/she has to choose between your interest and his/her own. For now is in his/her best interest to have you as a friend, he/she is also alone in the school after all.",
			},
		},
		pen:{

			bounty:{
				field:"Penalty",
				title:"Bounty",
				quotes:"I got a bounty of 100 virgins souls on me",
				description:"Self Explanatory... is a large bounty for not big enough so another Dark Prince risks his life, just be carefull...",
			},
		},
		},

		








		darkness1:{

		base:{

			base:{
				
				att:"(cunning)",
				field:"Starting Skill",
				title:"Darkness:",
				quotes:"Choose a Dark Prince starting Skill",
				description:"Skill description will appear here, then you can add it to your character paying it's star (*) Cost.",
				
			},

		},

		one:{
				

			subdue:{
				
				att:"(Darkness)",
				field:"Starting Skill",
				title:"Dark Arts Subjugation",
				quotes:"Fear the control of Darkness!",
				description:"You know the symbols the names and the conditions to corrupt the mind of others, you will first try to break their defenses then you can try to steal thoughts, influence their actions cause damage, madness, and finally control them like puppets. There is always a price, depending on the power and complexity of your action it can tire you, take away something from you or even kill you. But you can always pay with souls…",
				
			},

			curses:{
				
				att:"(Darkness)",
				field:"Starting Skill",
				title:"Dark Arts Curses",
				quotes:"Fear the touch of Darkness!",
				description:" You know the symbols the names and the conditions to create powerful curses, both lethal and none lethal with all kinnds of effects times and triggers. There is always a price, depending on the power of the curse can drain your life force exhausting you, take away something from you or even kill you. But you can always pay with souls…",
				
			},

			clairvoyance:{
				
				att:"(Darkness)",
				field:"Starting Skill",
				title:"Dark Arts Clairvoyance",
				quotes:"Fear the vision of Darkness!",
				description:"You know the symbols the names and the conditions to see the future and even influence it. There is always a price, depending on the vision and the influence it could drain your life force exhausting you, take away something from you or even kill you. But you can always pay with souls…",
				
			},


			necromancy:{
				
				att:"(Darkness)",
				field:"Starting Skill",
				title:"Dark Arts Necromancy",
				quotes:"Fear the army of Darkness!",
				description:"You know the symbols the names and the conditions to see the 'resurrect' more like raise undead bodies, trap spirits and harm the living. There is always a price, depending on the vision and the influence it could drain your life force exhausting you, take away something from you or even kill you. But you can always pay with souls…",
				
			},
			
			empower:{


				att:"(Darkness)",
				field:"Starting Skill",
				title:"Dark Arts Empower",
				quotes:"Fear the power of Darkness!",
				description:"You know the symbols the names and the conditions to imbue your body and spirit with Darkness, increasing all your combat abilities and gaining a sizeable powerup as well as unique abilities. There is always a price, depending on how much power, the duration, and extra effects like regenarion it could drain your life force exhausting you, take away something from you or even kill you. But you can always pay with souls…",
			},

			shaman:{

				att:"(Darkness)",
				field:"Starting Skill",
				title:"Dark Arts Shamanism",
				quotes:"Fear the nature of Darkness!",
				description:"You know the symbols the names and the conditions in order to connect with the corrupted nature, you can comunicate with it, calm feral beast and flora, change the climate, medle with the elements and even provoke natural disasters . There is always a price, depending on how much power, the duration, and extra the effect it could drain your life force exhausting you, take away something from you or even kill you. But you can always pay with souls…",
			},


			summon:{

				att:"(Darkness)",
				field:"Starting Skill",
				title:"Dark Arts Summoning",
				quotes:"Fear the residents of Darkness!",
				description:" You know the symbols the names and the conditions to summon powerful servants of the Abyss they vary in power and purpose depending on your ritual an offering. There is always a price, depending on the summon it could drain your life force exhausting you, take away something from you or even kill you. But you can always pay with souls… ",
			},

			pervert:{

				att:"(Darkness)",
				field:"Starting Skill",
				title:"Dark Arts Corrupt",
				quotes:"Fear the influence of Darkness!",
				description:" You know the symbols the names and the conditions to use the darkness in order to manipulate others, little by little chaning how they feel about things, this ability is very subtle and goes almost unnoticeable. As always There is always a price, depending on whom and how much you are chaning about him/her, it could drain your life force exhausting you, take away something from you or even kill you. But you can always pay with souls… ",
			},
		},
		two:{

			familiar:{
				
				att:"(Darkness)",
				field:"Starting Skill",
				title:"Abyss Familiar",
				quotes:"Isnt he/she cute :)",
				description:"You have a familar, a creature of the Abyss linked to you, choose any small animal/best form that you will like to be his physical form. Familiars are very helpfull and grow powerfull with you, but they must feed on souls or they will die... ",
			},

			cursedWeapon:{

				example:"Examples: A sword! Swords always awesome!/ An cursed magic book? / Obiviously an armor like bersek....", 
				att:"(Darkness)",
				field:"Starting Skill",
				title:"Cursed Weapon",
				quotes:"Absolute power for a little price...",
				description:"Choose any weapon or equipment or item. You will have a powerfull cursed version of it) (It will drain your energy and on long uses yout life... but you could always use souls...",
			},
			
			master:{

				example:"Examples: I want to worship death no matter the cost/ I want a master that gives me extra magic and dont ask much in return", 
				att:"(Darkness)",
				field:"Starting Skill",
				title:"Dark Master of the Abyss",
				quotes:"Oh Dark one! I invoke you!",
				description:"You can choose a Supreme Lord of the Abyss in order to have a connection with it know the symbols the names and the conditions to interact with him/her/it. Different Supreme Overlords have different personalities, powers and demand different things.) ( You can choose up to three Dark Masters but is not recommended unless you know what you are doing. Dark Masters provide much better deals to Cathonians since they can contact directly with the Primal Chaos",
				
			},

			smite:{


				att:"(Darkness)",
				field:"Starting Skill",
				title:"Divine Arts Smite",
				quotes:"Fear brigthness of the LIGTH!!!",
				description:" Somehow you can use the power of the light to burn all evil, the more darkness the enemy the more damage. the damage scales of you so even with max darkness an Overlord could resist your smite. Divine abilities has a bigger price than dark arts, since the Primal Chaos doesnt enjoy the show, so get ready to pay in servitude, souls or blood) ( Many overlords will hate you, but not all, afterall if it make you stronger use it ",
			},

			bless:{

				att:"(Darkness)",
				field:"Starting Skill",
				title:"Divine Arts Blessing",
				quotes:"Admire the power of the ligth",
				description:" Somehow you can use the power of the light to bless, you can give all kinds of blessings not only to you but others, Is much more flexible than Dark Empower and can counter most curses and negative effects. Divine abilities have bigger price than dark arts, since the Primal Chaos doesnt enjoy the show, so get ready to pay in servitude, souls or blood) ( Many overlords will hate you, but not all, afterall if it make you stronger use it ",
			},

			bolt:{

				att:"(Darkness)",
				field:"Starting Skill",
				title:"Chaos Bolt",
				quotes:"Die!",
				description:" You can use the raw power of darkness to shoot a powerfull deathly proyectile with speaicl effects. as always there is always a price, depending on the power and added effects like hooming, it could drain your life force exhausting you, take away something from you or even kill you. But you can always pay with souls…  ",
			},

			barrier:{

				att:"(Darkness)",
				field:"Starting Skill",
				title:"Chaos Barrier",
				quotes:"Fail!",
				description:" You can use the raw power of darkness to form a powerfull barrier with speaicl effects. as always there is always a price, depending on the power and added effects like hooming, it could drain your life force exhausting you, take away something from you or even kill you. But you can always pay with souls…  ",
			},
		},
		unique:{

				demonContract:{

				kin:"demon",
				att:"(Darkness)(Demon)",
				field:"Starting Skill",
				title:"Demon Contract",
				quotes:"Sing right here, forget about the small letter is just bureaucracy",
				description:"You can make deals with others in exchange for anything really although the most popular is the soul, if you hold your end to the bargain the other person is forced by the Rulers of Seven Hells to hold their part. ) (Warning don't expect to fool DarkPrinces or Overlords, against them is more of an insurance that they keep their part but then again anything is possible",
				},
		},
		legend:{

			legend:{

				field:"Legendary Skill",
				title:"Twins Brother",
				quotes:"He/She is like me but more ugly :D",
				description:"You have a very close fraternal twin ,the kind that looks and acts different, join the university with you, you know him/her very well and he/she has your back) ( Ofc in Cathonia friendships and even family are rare and is possible for him/her to betray you in the future if he/she has to choose between your interest and his/her own. For now is in his/her best interest to have you as a friend, he/she is also alone in the school after all.",
			},
		},
		pen:{

			paranoia:{

				field:"Penalty",
				title:"Paranoia",
				quotes:"They are here! I can see them…",
				description:"You are pretty sure you have been followed by something that wants to kill you...",
			},
		},
		},
		
		
		penalty:{
			
			cunning:{
				
				field:"Penalty",
				title:"- Cunning(*)",
				quotes:"Everything according to plan I guess...",
				description:"You lose one point of Cunning",
				
			},

			migth:{
				
				field:"Penalty",
				title:"- Migth(*)",
				quotes:"I will crush you! in my dreams...",
				description:"You lose one point of Migth",
				
			},

			darkness:{
				
				field:"Penalty",
				title:"- Darkness(*)",
				quotes:"True Power is beyond my mortal self. I cant reach it...",
				description:"You lose one point of Darkness",
				
			},

			pragaras:{
				
				field:"Penalty",
				title:"Low Class",
				quotes:"Oh look an 'Overlord' from the shit lands. Ha ha ,loser....",
				description:"Only your incriptcion fee is paid, everything else you owe and you will have to work part time in order to pay that debt) (Your sitation and origins makes other think less of you",
				
			},

			cursedCollection:{
				
				field:"Penalty",
				title:"Cursed Collection",
				quotes:"I need all books with black covert, yours too… name your price or I shall take it from your corpse.",
				description:"Name a collection I will choose the specifics, if you see an thing that fits your colection you must have it.",
				
			},

			outcast:{
				
				field:"Penalty",
				title:"Outcast",
				quotes:" ... ",
				description: " The Lost, are known thieves and liers. Other kindres prefer to keep distance from them",
				
			},

			ignorant:{
				
				field:"Penalty",
				title:"Ignorant",
				quotes:" Ignorance is bliss ",
				description:"Perkunas Gods are not well educated even as Overlords, they lack on all basic knowledge even their reading skills are questionable,"
				
			},

			coward:{

				field:"Penalty",
				title:"Coward",
				quotes:" please dont kill me!",
				description:"You wont do anything that risks your precious life, if  it must be done then either from a safe spot or if you have no other choice because fleeing is not an option"
				
			},

			grotesque:{

				field:"Penalty",
				title:"Grotesque",
				quotes:" Go back to your pit! so disgusting.",
				description:"Pit Demons are ugly and unpleasant almost nobody enjoys their company even amongst themselves"
				
			},

			tradicional:{

				field:"Penalty",
				title:"Tradicional",
				quotes:"I will 'only!' do as grandpa taught me",
				description:"You can only make base runes, or in other words enchant equipment or build medieval weaponry. You neither have the knowledgqe or the skill to make advance technology and also its against your Pride"
				
			},

			deadlyPride:{

				field:"Penalty",
				title:"Deadly Pride",
				quotes:"What did you say about me?!",
				description:"You cannot tolerate insult and you are sore loser"
				
			},

			messiah:{

				field:"Penalty",
				title:"False Messiah",
				quotes:"Darkness ate Flesh",
				description:" Since you represent the Primal Chaos, any stupid act of incompetence will make you lose its aprroval ) (It could even kill you if you dare to waste its time"
				
			},

			marked:{

				field:"Penalty",
				title:"Black Mark",
				quotes:"Death wants my soul.",
				description:"Some Supreme lord of  the Abyss think your kind are a minor nuisance playing 'Lord of Death. without paying the price, so he marked you to die. His followers will attempt to kill you. And some Overlords won't risk getting close to you."
				
			},

			asura:{

				field:"Penalty",
				title:"Consumed by Luxury",
				quotes:"I will only drink 'Krug Cross du Mesnil Blanc de Blanc Brut.'",
				description:"Unless in a war-situacion you must have the best products available as well as interesting variation in leisure."
				
			},

			lamp:{

				field:"Penalty",
				title:"Lamp Genie?",
				quotes:"Misconceptions...",
				description:"For some reason many Overlords, Specially if not well educated think that you give wishes and might try to en-prision you."
				
			},

			good:{

				field:"Penalty",
				title:"Luminous Heritage",
				quotes:"Live is a gift",
				description:"You don't accept living sacrifices, thus limiting the ways you can improve your aura."
				
			},

			angel:{

				field:"Penalty",
				title:"Angelic 'Booty'",
				quotes:"Flap those wings for me",
				description:"Some demons still are envious or just culturally hold a grudge against angels. While some other overlords woudnt mind to have you as a sex slave"
				
			},

			elemental:{

				field:"Penalty",
				title:"Elemental Weakness",
				quotes:"No, water nooooo!!!",
				description:"You share the same weakness as your chosen element"
				
			},

			no:{

				field:"Penalty",
				title:"No Weakness",
				quotes:"I don't have such a thing as a penalty",
				description:"As the say 'Overconfidence is a slow and insidious killer' aslo Abaddonians are kind of hated by the rest of the hells..."
				
			},

			ego:{

				field:"Penalty",
				title:"Snob",
				quotes:"Tsk half-bloods",
				description:"You can’t help it but look down on everyone that is not a Imperial Demon or an Overlord of higher status than you, thus creating tension."
				
			},

			beast:{

				field:"Penalty",
				title:"Soul Link",
				quotes:"Nooo fluffy!!!",
				description:"As with all things of caotica the powerful connection to your GodBeast is not due to love… not at all… this symbiosis works due to the fact that if any of the two die the other dies also. This way they are always encouraged to give their best for each other"
				
			},

			devil:{

				field:"Penalty",
				title:"Indirect Evil",
				quotes:"My hands are never dirty",
				description:"Devil cannot kill their enemies themeselves, but must use others or dark arts or favours to the primal Chaos.",
				
			},

			infernos:{

				field:"Penalty",
				title:"Cursed Home",
				quotes:"All those who enter will never leave",
				description:"Everyone gets home sick, but Infernos is so different in primal level so natural, the scream the fires, the Abyss the souls... For a strange reason your being cannot function if you are a long time away from home. It like a curse if you don't visit often “and let Infernos drain a bit of your life force” You will start to feel sick and eventually die.) (You can always use a portal to return to Infernos "
				
			},


			infernal:{

				field:"Penalty",
				title:"Only Darkness",
				quotes:"Normal RuneTech is weak",
				description:"You will only forge Dark runetech.",
				
			},

			flame:{

				field:"Penalty",
				title:"Pyromaniac",
				quotes:"Is good... but it would be better ON FIRE!",
				description:"You must light things on fire… if you see beautiful forest, nice buildings, lots of helpless people… is hard to resist.",
				
			},

			hoarder:{

				field:"Penalty",
				title:"Void Hoarder",
				quotes:"I dont have any money, is gone...",
				description:"You cannot spend or use in any disposable way, or gift or lend any position or valuable you might obtain.",
				
			},
		},
	},
	
	
	
	
	





















	text:{
		
		intro:{
			
			image:"Intro.jpg", 
			title:"Welcome to RPG Master Pandemonium!",
			subtitle: "New and old players alike.",
			description:[
				
				" Last game was a management game focused on Psyren, Senators and Politics.",
				" This game will take place on Cathonia, a dark universe where the evil forces have already won. All humanity is already enslaved or destroyed by the numerous Overlords. The Overlords were able to destroy the previous civilizations and their protectors, with no “good guys to conquer” they turned against each other, bringing forward universal destruction and endless war. Time passed and as it usually goes, some individuals do better than others, thus new empires rose. Cathonia is so vast in territory and depth that Empires evolved into Dominions that fused into Cosmos which in turn opened new dimensions and realities. This event created a chain of command with no known end. Nowadays, nobody really knows who is really in control.",
				" You will partake in the first year of school at the University of Dark arts in Pandemonium, a “neutral city” of Cathonia and the Capital of Seven Hells (More about this region later). You will be a Dark Prince meaning the son/disciple of an Overlord. At university you will hopefully learn how to become a wise, ruthless conqueror. but most importantly how to survive in the hellhole that is Cathonia.",
				" Explore a new universe with different settings, values, lore etc. And for the first time you play as the “bad guys” kind off. You don't need to be evil but don't expect to change the world anytime soon. This game is merciless and begs for smart play, there is none to save you, no capsules, no John, no resurrection (at least not an easy one). Therefore is very important how you use your skills and how you interact with the world. To this end I made a quite interesting character creation.",
				" There is a very rich and interesting lore but I won't dump it all here. For now I will only explain things that are related to your origins and choices. If you want to know extra buying your own you can always read my replies to the other players and as always feel free to ask me anything. Like with all of my games, you can pace yourself having complex goals, exploring the lore and the universe. Or keep it simple do the minimum and enjoy the ride.",
			],
		},
		
		attributes:{
			
			image:"Char.jpg", 
			title:"Attributes:",
			subtitle: "",
			description:[
				" 1) Atributes represent your playstyle. You can get powerful either by training and empowering oneself both physicaly and spiritualy (Might), acquiring status, privileges, gaining knowledge and having competent vassals (Cunning), dealing with the primal dark energies of Caothonia and worship High Overlords (Darkness)",
				" 2) Each Attribute has an small explanation but they are not stadistics! they are currency to unlock starting abilities related to that playstyle. ",
				" 3) Each Attribute has a minimun value of 2 stars ",
				" 4) Max total stars per attribute is 5 stars.",
				" 5) Have Fun!",
			],
		},

		origins:{
			
			image:"Origins.jpg", 
			title:"origins:",
			parts:[

				{

					title: "The Region: Seven Hells",
					subtitle: "",
					description:[
						" The forces of good lost the war on Cathonia Eons ago. Primal demons and Evil incarnations were amongst the victors, now without their mortal enemies, the Primal angels they were free to feed on the souls of the wicked making many bastions to cultivate and harvest such souls. With time they found new sources of power, opened new dimensions, evolved futher expanding their influence all over Cathonia.",
						" Seven Hells is one of the many Demon Heritage dominions spread all over Cathonia .As with most parts of Cathonia, Overlords fight for Dominion and influence. The place is called Seven Hells because of it Seven regions with very distinct cultures nature and influences and Overlords from all over Cathonia fighting for control. As with all Demonic Dominions Seven Hells has an entrance to the Abyss which extends all over Cathonia. Nobody knows is not clear who is the ruler of each Region or Seven Hells all together much less to know what is happening on the bottomless depths of the Abyss.",
						" Souls are the Currency of Seven Hells and most parts of Cathonia as well, although its value and business practices are different from place to place. A soul worth is dependent on its purity and power. Since purity is something lacking in Cathonia it's mostly the power that defines the value. An example of a ranking would be: ",
					],
					list:[
						{title:"Low souls" 
						,body:"which are from farmed enslaved lower intelligence creatures and such they are like current cents."},
						
						{title:"Souls" 
						,body:"which are from higher classes of servants like humans and so on. Act as daily currency"},
						
						{title:"Big souls or Virgin souls" 
						,body:" that come from special characteristics like strong will, ect. It can value from hundred to many thousands of normal souls. (Your souls has this value)"},
						
						{title:"Greater Souls" ,
						body:"or Above are souls of Overlords or souls of Pure entities from other universes. Yeah Overlords are rich just by having their own soul hehe."},
					],
				},

				{

					title: "The Kindred:",
					subtitle: " (Playable races)",
					description:[
						" Seven Hells host a very variate pool of Kindred from all nearby regions of Cathonia. All Kindreds can get powerful by training, studying, expanding their influence, trading souls and making deals with higher Overlord, beyond that each Kindred having their unique gift that allowed them to thrive in Cathonia. Furthermore most Kindred have unique interactions with souls, that's the reason they are used as currency.",
						" ",
					],
					list:[
						{title:"ArchDemons: " ,
						body:"are the most common Kindred of Seven Hells. They evolved from all kinds of lower demons keeping their unique skills , gaining higher power and sovereignty. Their careful and diplomatic nature allows them to coexist with other kindred. Demons can refine the anima in the souls  producing dark Matter a highly valuable substance that in the hands of a demon can be used to recover and empower any other ability. The outcome will be depending on the power of the soul. Some Demons have unique ways of using Dark Anima."},
						
						{title:"Dark Gods: " ,
						body:"use of souls is only in the living either by faith or sacrifice. Sacrifice is quicker and more effective in the short term without needed much investment since it does not require the free will of the sacrificed one. Doing so they can improve the dominion of their aura. Which is a part of their self."},
						
						{title:"Thanes: " ,
						body:"are the masters of RuneTech the most powerful Cathonia Technology. Although others can use runeTech with magic sources. Thanes being long time descendant of titans can use absorb souls and use their blood to empower their Tech. So in a pinch you can always charge and modify RuneTech of others for money."},
					
						{title:"Cathonias: " ,
						body:"are a Native Kindred to Cathonia being of the most common kindred of the Multiverse as a whole is only natural they have some presence on Seven Hells. Although all kindred can offer souls and get power from high Overlords. Cathonias can directly connect the Primal Chaos of Cathonia Skipping the middleman in order to obtain great powers and rewards from the universe itself in exchange for souls or servitude."},

						{title:"Ethernals: " ,
						body:" are evil spirits that don't require a physical body to function, thus being immune to most physical and elemental types of damage as well as having a higher connection with the spiritual planes."},

						{title:"Others: " ,
						body:"They are other kindred unique to specific regions."},
					],
				},	

				{

					title: "The Overlords: ",
					subtitle: "(Parents maybe)",
					description:[
						" As I mentioned before you will be a Dark Prince/es , title given to sons or the disciples on an Overlord who intents someone to succeed him. Not all Overlords care about succession. Legacy or even family. But those who do try to enroll their Dark Prince/es into the University of Pandemonium, which teaches all you need to know to be successful the everchanging Chaos of Seven Hells and beyond.",
						" Hells have a few options regarding who is your Overlord. In reality there would be many more but I list the most relevant. ",
					], 
					list:[
						{title:"Solo: " ,
						body:"Your Overlord mostly does his own thing, perhaps he pays some kind of tribute to some higher Overlord but you don't even know about. This options although with less benefits that the others, has more freedom of action. Your only worry is to benefit your Overlord. Or perhaps surpass him. The Inheritance is clean and direct."},
						
						{title:"Group: " ,
						body:"Your Overlord is part of a group or an institucion with a common Goal, so you not only serve your Overlord but also the ideals and goals of the institution itself. This options is balanced since you have added benefits of being part of a group but you are expected to contribute to the objectives of the group. In most cases inheritance means you have to be part of the institution as well"},
						
						{title:"Cult: " ,
						body:"You Serve a High or Supreme Overlord that interactas either directly or indirectly with you, you have not individual connection with anybody since you were selected from the Cult to join the university. This option is nice if you like what the cult is about. Since if you do well within the cult you are scoring points with a really powerful entity the drawbacks are that is hard to leave cults and some others won't like your cult. Moreover there is nothing to inherit."},

						{title:"Other: " ,
						body:"Your position is either a mixture of the above or none of the above. Read the actual origin for more information"},
					],
				},
			],
		},
	},

	conditional:{

		tanakh:{

			id:"tanakh",
			name:"Tanakh Cursed Collection",
			tutorial:"Write a general possesion can be item or animal. You can try to add attributes to narrow the collection. but it will be up to the game master choose the specifics. remeber you must complete your colection no matter the cost.",
			example:"Examples: Magic Swords / Butterflies / Blood Samples",
		},

		combat1:{

			id:"combat1",
			name:"Weapon/Combat Mastery ",
			tutorial:"Choose a weapon or a hand to hand combat style. It can be a common or created by you. The point is that you are a master in that art. It can be combination as long as they are part of the same combat style",
			example:"Examples: Sword and shield / Assault rifle / ( I want a martial art like konfu but based on the animals of Cathonia)",
		},

		craft1:{

			id:"craft1",
			name:"Craft/Job Mastery ",
			tutorial:"Choose your craft, basically a profession that you want to be really good at, it can be real or created by you. as always I will balance it.",
			example:"Examples: Doctor / Botanist / ( I want the knowledge of politics and high overlords what they like who is their enemy ect)",
		},

		god:{

			id:"god",
			name:"Aura of Control",
			tutorial:"Choose any tribe, element, idea or value to have access to all posible skills with it as well as having an innate control over it. It power is dependent on the influence you have on it as well as souls dedicated to yout cause. They can be created by you but I will balance its power. ",
			example:"Examples: Im the God of the Hekars a race of bugs / Im the god of Fire!!! / Im the God of fear due to uncertanty.",
		},

		astral:{

			id:"astral",
			name:"Constelation of Doom",
			tutorial:"Write one of the 12 zodiac signs'Virgo, Picsis ect' then write either 'Wild or Imperial' So you get one of the 24 constelations of Helvede. Remenber you will get unique powers an a Cursed weapon asociated with your choice. ",
			example:"Examples: Wild Saggitarius / Royal Leo / Wild Leo ect,"
		},

		research:{

			id:"research",
			name:"Advanced Studies",
			tutorial:"Choose some specific advanced knowledge to be great at. You can just tell me what you would like to do instead of the name of the study) ( Good examples if you don't have anything in mind are Soul Surgeon , Advanced Anima Manipulation, History of the Dark Arts , Theology of the Ancient Pantheons, Master of Gladiatorial Patronus, TecnoRunic Engineer. ",
			example:"Examples: Any of the Above / I want the knowledge of other Univereses/ Robotics like Iron Man?,"
		},


		trengar:{

			id:"trengar",
			name:"Inner Beast",
			tutorial:"Choose an Ancestral animal/beast it can be real, from mythology or created by you. You get abilities related to it as well as a Transformation that makes you look like it and Empowers all previous abilities as well as your physical and spiritual capacities. ",
			example:"Examples: Bear / Hydra / I want a bug that can eat rocks and has diamond horns,"
		},

		legend:{

			id:"legend",
			name:"Legendary Technique",
			tutorial:"Create your own super cool technique that you inhertied from your Overlord ) ( If lazzy to create, you can always choose something from an anime. ",
			example:"Examples: Hmm Time travel? / Rasengan! / I want to be inmune for a short time,"
		},

		element:{

			id:"element",
			name:"Elemental Dominium",
			tutorial:"Choose an element either basic, complex or created by you. It will be part of your body and you can use it. The more powerful the element the more difficult to use )( Element control uses energy like physical and spirtual activities ",
			example:"Examples: Fire!!!! / Life? / Black Ligthning yeah", 
		},

		master:{

			id:"master",
			name:"Dark Master",
			tutorial:"You can choose a Supreme Lord of the Abyss in order to have a connection with it know the symbols the names and the conditions to interact with him/her/it. Different Supreme Overlords have different personalities, powers and demand different things.) ( You can choose up to three Dark Masters but is not recommended unless you know what you are doing. Dark Masters provide much better deals to Cathonians since they can contact directly with the Primal Chaos.) ( Write the kind of benefits you wish to obtain and how much you are willing ",
			example:"Examples: I want to worship death no matter the cost/ I want a master that gives me extra magic and dont ask much in return", 
		},

		familiar:{

			id:"familiar",
			name:"Dark Familiar",
			tutorial:"You have a familar, a creature of the Abyss linked to you, choose any small animal/best form that you will like to be his physical form. Familiars are very helpfull and grow powerfull with you, but they must feed on souls or they will die... ",
			example:"Examples: A black cat like Sabrina!/ An Sloth / A purple fairy?", 
		},

		cursedWeapon:{

			id:"familiar",
			name:"Cursed Weapon",
			tutorial:"You have a familar, a creature of the Abyss linked to you, choose any small animal/best form that you will like to be his physical form. Familiars are very helpfull and grow powerfull with you, but they must feed on souls or they will die... ",
			
		}

	},

	note:{

		1:"Fix Updatable List..........",
		2:"Configure your skills, same as kindred orgins. Plus make a remove button that only works with custom skills",
		3:"Add the Upgrade skills, plus the upgreded toogle and filter. Create an add Special Skills.",
	},


	data:{
		  
		totalStars:5,
		starsM: 2 ,
		starsC: 2,
		starsD: 2,
		name: "Write your name",
		page: 1,
		prePage: 1,
		origin:{ 
		  	hell:"pragaras",
		  	origin:"solo",
		  	skills:{},
		   	info:{},
		},
		kin: { 
		  	hell:"pragaras",
		  	kin:"one",
		   	info:{
		   		pure:"Migth",
		   	},
		},
		skills:{ 
		  	migthSkills:{

		  	element:{
		  		att:"premade",
		  		group:"deathWind",
		  		name:"element",
		  		upgraded:false,
		  		kin:true,
		  		origin:false,
		  		info:""
		  	},
		  	
		  	superSpeed:{
		  		att:"premade",
		  		group:"superSpeed",
		  		name:"superSpeed",
		  		upgraded:false,
		  		kin:false,
		  		origin:true,
		  	},
		  	
		

		  

		  	},

		  	cunningSkills:{

		

		  

		 
		  	},


		  	darknessSkills:{



		  

		  
		  	},

		  	info:{},
		  
		},
		
	}
}