from flask import Flask, request, render_template, redirect, url_for
app = Flask(__name__)

def bubbleSort(alist):
    alist = [int(x) for x in alist.split(',')]
    mega_list = []
    for passnum in range(len(alist)-1,0,-1):
        for i in range(passnum):
            if alist[i]>alist[i+1]:
                temp = alist[i]
                alist[i] = alist[i+1]
                alist[i+1] = temp
                mega_list.append(alist[:])

    if not mega_list:   #if list is already sorted
        mega_list.append(alist)

    return mega_list

@app.route("/", methods=['GET', 'POST'])
def index():
    if request.method == 'POST':
        usr_input = request.form['list']
        return redirect(url_for("bubble", num_list=usr_input))
    return render_template("index.html")

@app.route("/bubble/<num_list>")
def bubble(num_list):
    return render_template("bubble.html", all_users=bubbleSort(num_list))

if __name__ == '__main__':
    app.run()


