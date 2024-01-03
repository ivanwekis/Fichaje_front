export class Register {
    date: string;
    string_id: string;
    modified: boolean;
    inputs: Input[];
    outputs: Output[];
    nightShift: boolean;

    constructor(
        string_id: string, 
        date: string, 
        modified: boolean,
        nightShift: boolean,
        inputs: Input[] = [], 
        outputs: Output[] = []
    ) {
        this.date = date;
        this.string_id = string_id;
        this.modified = modified;
        this.inputs = inputs;
        this.outputs = outputs;
        this.nightShift = nightShift;
    }
}

export class Input {
    input: string;

    constructor(input: string) {
        this.input = input;
    }
}

export class Output {
    output: string;
    reason: string;

    constructor(output: string, reason: string) {
        this.output = output;
        this.reason = reason;
    }
}