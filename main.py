from openai import OpenAI

api_key = ""

client = OpenAI(
    api_key=api_key,
)

def ask_ai(question):
    conversation_history = [
        {"role": "system", "content": "Sen yardımsever bir yapay zeka asistanısın."},
        {"role": "user", "content": question},
    ]
    
    response = client.chat.completions.create(
        model = "gpt-3.5-turbo",
        temperature = 0.2,
        messages= conversation_history
    )
    
    return response.choices[0].message.content
