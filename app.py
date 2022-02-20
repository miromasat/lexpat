import boto3
import json
from variables import *


translate = boto3.client('translate')
lex = boto3.client('lexv2-runtime')

while True:

    initialText = input(">>> ")
    
    print(initialText)
    
    inputText = translate.translate_text(
                Text=initialText,
                SourceLanguageCode=SourceLanguageCode,
                TargetLanguageCode=TargetLanguageCode
            )
    
    
    print(inputText['TranslatedText'])
    
    interaction = lex.recognize_text(
        botId=botId,
        botAliasId=botAliasId,
        localeId=localeId,
        sessionId=sessionId,
        text=inputText['TranslatedText'])
        
        
    outputText = interaction['messages'][0]['content']
    
    print(outputText)
    
    outputText = translate.translate_text(
                    Text=outputText,
                    SourceLanguageCode=TargetLanguageCode,
                    TargetLanguageCode=SourceLanguageCode
                )
    
    print(outputText['TranslatedText'])