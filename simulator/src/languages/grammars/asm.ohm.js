const asm = `ASM <: Base {
  Root := ASM
  ASM = intermediateInstruction* instruction?
  
  instruction = label|aInstruction|cInstruction
  intermediateInstruction = instruction space+

  identifier := (letter|underscore|dot|dollar|colon) (alnum|underscore|dot|dollar|colon)*

  label = openParen identifier closeParen
  aInstruction = at (identifier | decNumber)
  cInstruction = assign? op jmp?

  assignChar = "A" | "M" | "D"
  opChar = assignChar | "0" | "1" | "!" | "-" | "+" | "|" | "&"
  
  assign = assignChar+ equal
  op = opChar+

  jmp = semi ("JGT" | "JEQ" | "JGE" | "JLT" | "JNE" | "JLE" | "JMP")
}`;
export default asm;
