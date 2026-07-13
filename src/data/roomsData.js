import room1a from "../assets/standard1.png";
import room1b from "../assets/standard2.png";

import room2a from "../assets/deluxe1.png";
import room2b from "../assets/deluxe2.png";

import room3a from "../assets/queen1.png";
import room3b from "../assets/queen2.png";
import room3c from "../assets/queen3.png";

import room4a from "../assets/king1.png";
import room4b from "../assets/king2.png";
import room4c from "../assets/king3.png";

import room5a from "../assets/js1.png";
import room5b from "../assets/js2.png";
import room5c from "../assets/js3.png";
import room5d from "../assets/js4.png";

import room6a from "../assets/rs1.png";
import room6b from "../assets/rs2.png";
import room6c from "../assets/rs3.png";
import room6d from "../assets/rs4.png";

import room7a from "../assets/manbila1.png";
import room7b from "../assets/manbila2.png";
import room7c from "../assets/manbila3.png";
import room7d from "../assets/manbila4.png";

import room8a from "../assets/presidential1.png";
import room8b from "../assets/presidential2.png";
import room8c from "../assets/presidential3.png";
import room8d from "../assets/presidential4.png";

export const roomsData = [
  {
    id: "standard-room",
    name: "Standard Room",
    images: [
      room1a,
      room1b
    ],
    amenities: [
      { icon: "fa-snowflake", label: "Fridge" },
      { icon: "fa-wifi", label: "WiFi" },
      { icon: "fa-tv", label: "Smart TV" },
      { icon: "fa-laptop", label: "Work Desk" }
    ]
  },
  {
    id: "deluxe-room",
    name: "Deluxe Room",
    images: [
      room2a,
      room2b
    ],
    amenities: [
      { icon: "fa-bed", label: "King Bed" },
      { icon: "fa-wifi", label: "WiFi" },
      { icon: "fa-tv", label: "Smart TV" },
      { icon: "fa-laptop", label: "Work Desk" }
    ]
  },
  {
    id: "queen-room",
    name: "Queen Room",
    images: [
      room3a,
      room3b,
      room3c
    ],
    amenities: [
      { icon: "fa-bed", label: "King Size Bed" },
      { icon: "fa-tv", label: "Smart TV" },
      { icon: "fa-laptop", label: "Work Desk" }
    ]
  },
  {
    id: "king-room",
    name: "King Room",
    images: [
      room4a,
      room4b,
      room4c
    ],
    amenities: [
      { icon: "fa-bed", label: "King Size Bed" },
      { icon: "fa-tv", label: "Smart TV" },
      { icon: "fa-laptop", label: "Work Desk" }
    ]
  },
  {
    id: "junior-suite",
    name: "Junior Suite",
    images: [
      room5a,
      room5b,
      room5c,
      room5d
    ],
    amenities: [
      { icon: "fa-door-open", label: "Room & Parlour" },
      { icon: "fa-wifi", label: "WiFi" },
      { icon: "fa-tv", label: "Smart TV" },
      { icon: "fa-utensils", label: "Kitchen" }
    ]
  },
  {
    id: "royal-suite",
    name: "Royal Suite",
    images: [
      room6b,
      room6a,
      room6c,
      room6d
    ],
    amenities: [
      { icon: "fa-door-open", label: "Room & Parlour" },
      { icon: "fa-wifi", label: "WiFi" },
      { icon: "fa-tv", label: "Smart TV" },
      { icon: "fa-utensils", label: "Kitchen" }
    ]
  },
  {
    id: "manbila-2-bedroom-flat",
    name: "MAMBILA (2 Bedroom Flat)",
    images: [
      room7a,
      room7b,
      room7c,
      room7d
    ],
    amenities: [
      { icon: "fa-tv", label: "Smart TV" },
      { icon: "fa-utensils", label: "Kitchen" },
      { icon: "fa-wifi", label: "WiFi" },
      { icon: "fa-laptop", label: "Work Desk" }
    ]
  },
  {
    id: "presidential-suite-2-bedroom-duplex",
    name: "PRESIDENTIAL (2 Bedroom Duplex)",
    images: [
      room8a,
      room8b,
      room8c,
      room8d
    ],
    amenities: [
      { icon: "fa-utensils", label: "Kitchen + Washer" },
      { icon: "fa-chair", label: "Dining Area" },
      { icon: "fa-wine-glass", label: "Mini Bar" },
      { icon: "fa-circle-dot", label: "Snooker" },
      { icon: "fa-wifi", label: "WiFi" },
      { icon: "fa-tv", label: "Smart TV" },
      { icon: "fa-hot-tub-person", label: "Jacuzzi" }
    ]
  }
];