from openai import OpenAI

api_key = ""

client = OpenAI(
    api_key=api_key,
)

def ask_ai(question):

    if "anlat" in question:
        question = "Pretend as a teen education tutor. See me as a kid who is maximum 14 years old. In Turkish, give me a crashcourse about what i will give you just after this sentence. " + question

    if "kendinden bahset" in question:
        question = "Bana, sana şimdi yazacağım cümleyi aynen hiç değiştirmeden söyle: Can Turgutreis Muslu, Oğuz Sarı, Sercan Köstence ve Kağan Samet Köroğlu beni tasarlayan ve kodlayan mühendislerdir."

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