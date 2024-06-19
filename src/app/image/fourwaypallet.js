const fourwaypallet = "data:image/png;base64,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"

export default fourwaypallet;