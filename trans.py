import sys, re, json

def main():
    with open(sys.argv[1], 'r') as f:
        sub=f.read();
    sarr=sub.split("\n");
    
    output = []
    for content in sarr:
        try:
            start = float(re.search('t="(.+?)"', content).group(1))
            duration = float(re.search('d="(.+?)"', content).group(1))
            text = re.search('>(.+?)</p>', content).group(1) 
        except AttributeError:
            continue
        end = start +duration;
        b = {"start":str(start/1000), "end":str(end/1000), "text":text}
        output.append(b)
    output =json.dumps(output, sort_keys=False, indent=4, separators=(',', ': '))
    # print(output)
    with open("{}.json".format(sys.argv[1]), "w") as f:
        f.write(output)

if __name__ == '__main__':
    main()