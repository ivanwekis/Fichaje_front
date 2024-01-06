export class Register {
    date: string;
    string_id: string;
    modified: boolean;
    inputs: Input[];
    outputs: Output[];
    nightShift: boolean;

    constructor(data: Partial <Register>) {
        this.date = data.date || '';
        this.string_id = data.string_id || '';
        this.modified = data.modified || false;
        this.inputs = data.inputs ? data.inputs.map(input => new Input(input.input)) : [];
        this.outputs = data.outputs ? data.outputs.map(output => new Output(output.output, output.reason)): [];
        this.nightShift = data.nightShift || false;
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