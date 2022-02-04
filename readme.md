**How to use**

Set all parameters needed in file `variables-config.py` and rename the file to `variables.py`. 

`
SourceLanguageCode="xx" # see options here https://docs.aws.amazon.com/translate/latest/dg/what-is.html
TargetLanguageCode="xx" # see options here https://docs.aws.amazon.com/translate/latest/dg/what-is.html
botId='' 
botAliasId=''
localeId=''
sessionId=''
`

Ensure you have right AWS roles allowing you to use Amazon Translate and Amazon Lex and also install all dependencies via `pip install -r requirements.txt`.