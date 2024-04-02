const jack = `Jack <: Base {
    Root := Class

    Class = "class" jackIdentifier OpenBrace ClassVarDec* SubroutineDec* CloseBrace

    Type = "int" | "char" | "boolean" | jackIdentifier

    ClassVarType = "static" | "field"
    ClassVarDec = ClassVarType Type jackIdentifier TrailingIdentifier* Semi
    TrailingIdentifier = Comma jackIdentifier

    ReturnType = Type | "void"
    SubroutineType = "constructor" | "function" | "method" 
    SubroutineDec = SubroutineType ReturnType jackIdentifier OpenParen ParameterList CloseParen SubroutineBody


    Parameter = Type jackIdentifier
    Parameters = Parameter TrailingParameter*
    TrailingParameter = Comma Parameter
    ParameterList = Parameters?

    SubroutineBody = OpenBrace VarDec* Statement* CloseBrace

    VarDec = "var" Type jackIdentifier TrailingIdentifier* Semi

    Statement = LetStatement | IfStatement | WhileStatement | DoStatement | ReturnStatement

    LetStatement = "let" jackIdentifier ArrayIndex? Equal Expression Semi
    ArrayIndex = OpenSquare Expression CloseSquare

    IfStatement = "if" OpenParen Expression CloseParen OpenBrace Statement* CloseBrace ElseBlock?
    ElseBlock = "else" OpenBrace Statement* CloseBrace

    WhileStatement = "while" OpenParen Expression CloseParen OpenBrace Statement* CloseBrace
    DoStatement = "do" SubroutineCall Semi
    ReturnStatement = "return" Expression? Semi

    op = "+" | "-" | "*" | "/" | "&" | "|" | "<" | ">" | "="
    ExpressionPart = op Term
    Expression = Term ExpressionPart*

    integerConstant = digit+
    stringConstant = doubleQuote (~doubleQuote ~newline any)* doubleQuote
    keywordConstant = "true" | "false" | "null" | "this"

    ArrayAccess = jackIdentifier ArrayIndex
    GroupedExpression = OpenParen Expression CloseParen

    unaryOp = "-" | "~"
    UnaryExpression = unaryOp Term

    Term = integerConstant | stringConstant | keywordConstant | SubroutineCall  | ArrayAccess | jackIdentifier | GroupedExpression | UnaryExpression

    CompoundIdentifier = jackIdentifier Dot jackIdentifier
    SubroutineName = CompoundIdentifier | jackIdentifier
    SubroutineCall = SubroutineName OpenParen ExpressionList CloseParen

    ExpressionList = Expressions?
    Expressions = Expression TrailingExpression*
    TrailingExpression = Comma Expression

    jackIdentifier = letter (alnum | underscore)*
}`;

export default jack;
