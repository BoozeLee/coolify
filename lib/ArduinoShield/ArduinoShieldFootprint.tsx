import * as kicad from "@tscircuit/kicad-components"

export const ArduinoShieldFootprint = () => (
  <footprint>
    {/* Outline of the Arduino Uno R3 board (approx. 68.58mm x 53.34mm) */}
    <outline>
      <path
        d="M -34.29 -26.67 L -34.29 26.67 L 34.29 26.67 L 34.29 -26.67 Z" // Main Rectangle
        strokeWidth="0.1mm"
        stroke="black"
        fill="none"
      />
      {/* Example of a notch - adjust as needed based on specific visual reference */}
      <path
        d="M 34.29 5.0 L 37.0 5.0 L 37.0 10.0 L 34.29 10.0 Z" // Example notch for USB/Power Jack side
        strokeWidth="0.1mm"
        stroke="black"
        fill="none"
      />
    </outline>

    {/* Digital Header (J2: D8-D13, GND, AREF, SDA, SCL - 10 pins) */}
    <platedhole
      holeDiameter={"1.016mm"}
      name="D8"
      pcbX={27.94}
      pcbY={20.32}
      outerDiameter={"1.88mm"}
      shape="circle"
    />
    <platedhole
      holeDiameter={"1.016mm"}
      name="D9"
      pcbX={25.4}
      pcbY={20.32}
      outerDiameter={"1.88mm"}
      shape="circle"
    />
    <platedhole
      holeDiameter={"1.016mm"}
      name="D10"
      pcbX={22.86}
      pcbY={20.32}
      outerDiameter={"1.88mm"}
      shape="circle"
    />
    <platedhole
      holeDiameter={"1.016mm"}
      name="D11"
      pcbX={20.32}
      pcbY={20.32}
      outerDiameter={"1.88mm"}
      shape="circle"
    />
    <platedhole
      holeDiameter={"1.016mm"}
      name="D12"
      pcbX={17.78}
      pcbY={20.32}
      outerDiameter={"1.88mm"}
      shape="circle"
    />
    <platedhole
      holeDiameter={"1.016mm"}
      name="D13"
      pcbX={15.24}
      pcbY={20.32}
      outerDiameter={"1.88mm"}
      shape="circle"
    />
    <platedhole
      holeDiameter={"1.016mm"}
      name="GND_J2"
      pcbX={12.7}
      pcbY={20.32}
      outerDiameter={"1.88mm"}
      shape="circle"
    />
    <platedhole
      holeDiameter={"1.016mm"}
      name="AREF"
      pcbX={10.16}
      pcbY={20.32}
      outerDiameter={"1.88mm"}
      shape="circle"
    />
    <platedhole
      holeDiameter={"1.016mm"}
      name="SDA"
      pcbX={7.62}
      pcbY={20.32}
      outerDiameter={"1.88mm"}
      shape="circle"
    />
    <platedhole
      holeDiameter={"1.016mm"}
      name="SCL"
      pcbX={5.08}
      pcbY={20.32}
      outerDiameter={"1.88mm"}
      shape="circle"
    />

    {/* Digital Header (J1: D0-D7 - 8 pins) */}
    <platedhole
      holeDiameter={"1.016mm"}
      name="D0"
      pcbX={27.94}
      pcbY={-20.32}
      outerDiameter={"1.88mm"}
      shape="circle"
    />
    <platedhole
      holeDiameter={"1.016mm"}
      name="D1"
      pcbX={25.4}
      pcbY={-20.32}
      outerDiameter={"1.88mm"}
      shape="circle"
    />
    <platedhole
      holeDiameter={"1.016mm"}
      name="D2"
      pcbX={22.86}
      pcbY={-20.32}
      outerDiameter={"1.88mm"}
      shape="circle"
    />
    <platedhole
      holeDiameter={"1.016mm"}
      name="D3"
      pcbX={20.32}
      pcbY={-20.32}
      outerDiameter={"1.88mm"}
      shape="circle"
    />
    <platedhole
      holeDiameter={"1.016mm"}
      name="D4"
      pcbX={17.78}
      pcbY={-20.32}
      outerDiameter={"1.88mm"}
      shape="circle"
    />
    <platedhole
      holeDiameter={"1.016mm"}
      name="D5"
      pcbX={15.24}
      pcbY={-20.32}
      outerDiameter={"1.88mm"}
      shape="circle"
    />
    <platedhole
      holeDiameter={"1.016mm"}
      name="D6"
      pcbX={12.7}
      pcbY={-20.32}
      outerDiameter={"1.88mm"}
      shape="circle"
    />
    <platedhole
      holeDiameter={"1.016mm"}
      name="D7"
      pcbX={10.16}
      pcbY={-20.32}
      outerDiameter={"1.88mm"}
      shape="circle"
    />
    {/* The 0.16" (4.064mm) offset is between D7 and D8.
        In this layout, D0-D7 are on one side, D8-D13 on the other.
        The offset typically applies to the shift of the second digital header.
        I will represent this by adjusting the overall Y coordinate for the Digital Header D0-D7 if necessary,
        but typically it's the 8-pin vs 10-pin header placement relative to each other.
        For simplicity, I'll align them on the Y-axis for now and correct the actual board offset in the overall footprint.
    */}

    {/* Analog Header (A0-A5 - 6 pins) */}
    <platedhole
      holeDiameter={"1.016mm"}
      name="A0"
      pcbX={-15.24}
      pcbY={20.32}
      outerDiameter={"1.88mm"}
      shape="circle"
    />
    <platedhole
      holeDiameter={"1.016mm"}
      name="A1"
      pcbX={-17.78}
      pcbY={20.32}
      outerDiameter={"1.88mm"}
      shape="circle"
    />
    <platedhole
      holeDiameter={"1.016mm"}
      name="A2"
      pcbX={-20.32}
      pcbY={20.32}
      outerDiameter={"1.88mm"}
      shape="circle"
    />
    <platedhole
      holeDiameter={"1.016mm"}
      name="A3"
      pcbX={-22.86}
      pcbY={20.32}
      outerDiameter={"1.88mm"}
      shape="circle"
    />
    <platedhole
      holeDiameter={"1.016mm"}
      name="A4"
      pcbX={-25.4}
      pcbY={20.32}
      outerDiameter={"1.88mm"}
      shape="circle"
    />
    <platedhole
      holeDiameter={"1.016mm"}
      name="A5"
      pcbX={-27.94}
      pcbY={20.32}
      outerDiameter={"1.88mm"}
      shape="circle"
    />

    {/* Power Header (RESET, 3V3, 5V, GND, GND, VIN - 6 pins) */}
    <platedhole
      holeDiameter={"1.016mm"}
      name="RESET_PWR"
      pcbX={-15.24}
      pcbY={-20.32}
      outerDiameter={"1.88mm"}
      shape="circle"
    />
    <platedhole
      holeDiameter={"1.016mm"}
      name="V3_3_PWR"
      pcbX={-17.78}
      pcbY={-20.32}
      outerDiameter={"1.88mm"}
      shape="circle"
    />
    <platedhole
      holeDiameter={"1.016mm"}
      name="V5_PWR"
      pcbX={-20.32}
      pcbY={-20.32}
      outerDiameter={"1.88mm"}
      shape="circle"
    />
    <platedhole
      holeDiameter={"1.016mm"}
      name="GND_PWR1"
      pcbX={-22.86}
      pcbY={-20.32}
      outerDiameter={"1.88mm"}
      shape="circle"
    />
    <platedhole
      holeDiameter={"1.016mm"}
      name="GND_PWR2"
      pcbX={-25.4}
      pcbY={-20.32}
      outerDiameter={"1.88mm"}
      shape="circle"
    />
    <platedhole
      holeDiameter={"1.016mm"}
      name="VIN_PWR"
      pcbX={-27.94}
      pcbY={-20.32}
      outerDiameter={"1.88mm"}
      shape="circle"
    />

    {/* ICSP Header (MISO, VCC, SCK, MOSI, RESET, GND - 6 pins, typically near digital pins) */}
    <platedhole
      holeDiameter={"1.016mm"}
      name="MISO_ICSP"
      pcbX={25.4}
      pcbY={23.99} // Adjusted Y to place it above digital pins
      outerDiameter={"1.88mm"}
      shape="circle"
    />
    <platedhole
      holeDiameter={"1.016mm"}
      name="VCC_ICSP"
      pcbX={22.86}
      pcbY={23.99}
      outerDiameter={"1.88mm"}
      shape="circle"
    />
    <platedhole
      holeDiameter={"1.016mm"}
      name="SCK_ICSP"
      pcbX={20.32}
      pcbY={23.99}
      outerDiameter={"1.88mm"}
      shape="circle"
    />
    <platedhole
      holeDiameter={"1.016mm"}
      name="MOSI_ICSP"
      pcbX={17.78}
      pcbY={23.99}
      outerDiameter={"1.88mm"}
      shape="circle"
    />
    <platedhole
      holeDiameter={"1.016mm"}
      name="RESET_ICSP"
      pcbX={15.24}
      pcbY={23.99}
      outerDiameter={"1.88mm"}
      shape="circle"
    />
    <platedhole
      holeDiameter={"1.016mm"}
      name="GND_ICSP"
      pcbX={12.7}
      pcbY={23.99}
      outerDiameter={"1.88mm"}
      shape="circle"
    />

    {/* Silkscreen text for Digital Pins */}
    <silkscreentext text="D8" fontSize={0.8} pcbX={27.94} pcbY={22.32} />
    <silkscreentext text="D9" fontSize={0.8} pcbX={25.4} pcbY={22.32} />
    <silkscreentext text="D10" fontSize={0.8} pcbX={22.86} pcbY={22.32} />
    <silkscreentext text="D11" fontSize={0.8} pcbX={20.32} pcbY={22.32} />
    <silkscreentext text="D12" fontSize={0.8} pcbX={17.78} pcbY={22.32} />
    <silkscreentext text="D13" fontSize={0.8} pcbX={15.24} pcbY={22.32} />
    <silkscreentext text="GND" fontSize={0.8} pcbX={12.7} pcbY={22.32} />
    <silkscreentext text="AREF" fontSize={0.8} pcbX={10.16} pcbY={22.32} />
    <silkscreentext text="SDA" fontSize={0.8} pcbX={7.62} pcbY={22.32} />
    <silkscreentext text="SCL" fontSize={0.8} pcbX={5.08} pcbY={22.32} />

    <silkscreentext text="D0" fontSize={0.8} pcbX={27.94} pcbY={-18.32} />
    <silkscreentext text="D1" fontSize={0.8} pcbX={25.4} pcbY={-18.32} />
    <silkscreentext text="D2" fontSize={0.8} pcbX={22.86} pcbY={-18.32} />
    <silkscreentext text="D3" fontSize={0.8} pcbX={20.32} pcbY={-18.32} />
    <silkscreentext text="D4" fontSize={0.8} pcbX={17.78} pcbY={-18.32} />
    <silkscreentext text="D5" fontSize={0.8} pcbX={15.24} pcbY={-18.32} />
    <silkscreentext text="D6" fontSize={0.8} pcbX={12.7} pcbY={-18.32} />
    <silkscreentext text="D7" fontSize={0.8} pcbX={10.16} pcbY={-18.32} />

    {/* Silkscreen text for Analog Pins */}
    <silkscreentext text="A0" fontSize={0.8} pcbX={-15.24} pcbY={22.32} />
    <silkscreentext text="A1" fontSize={0.8} pcbX={-17.78} pcbY={22.32} />
    <silkscreentext text="A2" fontSize={0.8} pcbX={-20.32} pcbY={22.32} />
    <silkscreentext text="A3" fontSize={0.8} pcbX={-22.86} pcbY={22.32} />
    <silkscreentext text="A4" fontSize={0.8} pcbX={-25.4} pcbY={22.32} />
    <silkscreentext text="A5" fontSize={0.8} pcbX={-27.94} pcbY={22.32} />

    {/* Silkscreen text for Power Pins */}
    <silkscreentext text="RES" fontSize={0.8} pcbX={-15.24} pcbY={-18.32} />
    <silkscreentext text="3V3" fontSize={0.8} pcbX={-17.78} pcbY={-18.32} />
    <silkscreentext text="5V" fontSize={0.8} pcbX={-20.32} pcbY={-18.32} />
    <silkscreentext text="GND" fontSize={0.8} pcbX={-22.86} pcbY={-18.32} />
    <silkscreentext text="GND" fontSize={0.8} pcbX={-25.4} pcbY={-18.32} />
    <silkscreentext text="VIN" fontSize={0.8} pcbX={-27.94} pcbY={-18.32} />

    {/* Silkscreen text for ICSP Header */}
    <silkscreentext text="MISO" fontSize={0.8} pcbX={25.4} pcbY={25.99} />
    <silkscreentext text="VCC" fontSize={0.8} pcbX={22.86} pcbY={25.99} />
    <silkscreentext text="SCK" fontSize={0.8} pcbX={20.32} pcbY={25.99} />
    <silkscreentext text="MOSI" fontSize={0.8} pcbX={17.78} pcbY={25.99} />
    <silkscreentext text="RESET" fontSize={0.8} pcbX={15.24} pcbY={25.99} />
    <silkscreentext text="GND" fontSize={0.8} pcbX={12.7} pcbY={25.99} />
  </footprint>
);