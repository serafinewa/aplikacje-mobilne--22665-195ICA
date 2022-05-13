import React, { useState } from "react";
import { View, Text } from "react-native";
import styles from "./styles/styles";
import SelectComp from "./SelectComponent";

export default function SelectingOptions() {
    const [groups, setGroup] = useState([
        { label: "none", value: null },
        { label: "horse", value: "horse" },
        { label: "cow", value: "cow" },
        { label: "snake", value: "snake" },
        { label: "bird", value: "bird" },
        { label: "fox", value: "fox" }
    ]);
    const [colours, setColour] = useState([
        { label: "none", value: null, groups: ["horse","cow", "snake","bird","fox"] },
        { label: " yellow", value: 1, groups: ["horse"] },
        { label: " pink ", value: 5, groups: ["horse"] },
        { label: " green ", value: 2, groups: ["cow"] },
        { label: " blue ", value: 3, groups: ["cow"] },
        { label: " red ", value: 7, groups: ["snake"] },
        { label: " purple ", value: 4, groups: ["bird"] },
        { label: " orange ", value: 6, groups: ["fox"] },
        { label: " magenta ", value: 8, groups: ["snake"] }
    ]);
    const [coloursList, setColoursList] = useState([]);
    const [selectedGroup, setSelectedColour] = useState(null);
    const [selectedColour, setSelectedColours] = useState(null);
    const [selection, setSelection] = useState("");

    return (
        <View style={styles.sortFiltr.sortFiltrContainer}>
            <SelectComp
                label=" 𝕒𝕟𝕚𝕞𝕒𝕝 "
                items={groups}
                selectedValue={setGroup}
                onValueChange={name => {
                    setSelectedGroup(name);
                    setSelectedColour(null);
                    setColoursList(colours.filter(i => i.groups.includes(name)));
                }}
            />
            <SelectComp
                label=" 𝕔𝕠𝕝𝕠𝕦𝕣 "
                items={coloursList}
                selectedValue={selectedColour}
                onValueChange={colour => {
                    setSelectedColour(colour);
                    setSelection(
                        `${colours.find(i => i.value === colour).value}` + ' is here!'
                    );
                }}
            />
            <Text style={styles.sortFiltr.sortFiltrText}>{selection}</Text>
        </View>
    );
}