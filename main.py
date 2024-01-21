import openai


api_key = ""

openai.api_key = api_key


def ask_ai(question):
    conversation_history = [
        {"role": "system", "content": "Sen yardımsever bir yapay zeka asistanısın."},
        {"role": "user", "content": question},
    ]

    response = openai.ChatCompletion.create(
        model="gpt-3.5-turbo",
        messages=conversation_history,
        max_tokens=300,
        temperature=0.8,
    )

    for choice in response["choices"]:
        if "message" in choice and "content" in choice["message"]:
            return choice["message"]["content"]

    return response["choices"][0]["message"]["content"]